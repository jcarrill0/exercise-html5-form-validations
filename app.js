const formulario = document.getElementById('formulario');
const btnCancel = document.querySelector('#btnCancel');

const eleForm = document.forms[0].elements; // obtengo toso los campos del formulario;

let existError = false;


document.addEventListener('DOMContentLoaded', () => {
    campoValido();
    formulario.addEventListener('submit', valideForm);
    btnCancel.addEventListener('click', e => formulario.reset());
});

// Agrega bg verde a los input cuando se escribe y elimina los mensajes de error
function campoValido() {
    // recorre todos los campos del formulario 
    for(let i=0; i < eleForm.length; i++) {
        let item = eleForm[i];
        // le digo que los botones NO los tome en cuenta
        if(item.type !== 'submit' || item.type !== 'button') {
            if(item.type === 'text' || item.nodeName === 'TEXTAREA') {
                item.addEventListener('keydown', () => {
                    item.style.backgroundColor = '#d4f4e5';
                    // Si existen los mensajes de error elimina cada uno de ellos
                    if(existError === true) {
                        document.querySelectorAll('.error').forEach(error => error.remove());
                        existError = false;
                    }
                })
            }
        }
    }
}

function valideForm(e) {
    e.preventDefault();
    let cardNumber = formulario['inputCardNumber'],
        CVCNumber = formulario['inputCVCNumber'],
        amount = formulario['inputAmount'],
        firstName = formulario['inputFirstName'],
        lastName = formulario['inputLastName'],
        city = formulario['inputCity'],
        state = formulario['inputState'],
        postalCode = formulario['inputPostalCode'],
        creditCard = document.querySelector('input[name=creditCardOptions]:checked'),
        message = formulario['inputMessage'];

    if(!existError) {
        if(cardNumber.value === "") {
            validaInput(cardNumber, "Please provide a valid card number");
        }
        if(CVCNumber.value === "") {
            validaInput(CVCNumber, "Please provide a valid CVC Number");
        }
        if(amount.value === "") {
            validaInput(amount, "Please provide a valid amount");
        }
        if(firstName.value === "") {
            validaInput(firstName, "Please provide a valid First Name");
        }
        if(lastName.value === "") {
            validaInput(lastName, "Please provide a valid Last Name");
        }
        if(city.value === "") {
            validaInput(city, "Please provide a valid city");
        }
        if(state.value === "") {
            validaInput(state, "Please provide a valid state");
        }
        if(postalCode.value === "") {
            validaInput(postalCode, "Please provide a valid card number");
        }
        // if(creditCard.value === "") {
        //     validaInput(creditCard, "Please provide a valid credit card");
        // }
        if(message.value === "") {
            validaInput(message, "Please provide a valid message");
        }

        errorAlert(cardNumber);
        existError = true;
    }
    formulario.reset();
}


// Agrega el mensaje de error debajo de los campos del formulario
function validaInput(campo, msgError) { 
        campo.style.backgroundColor = '#f8d7da'
        let textError = document.createElement('p');
        textError.classList.add('error', 'text-danger', 'fst-italic', 'fw-light', 'mb-0');
        textError.innerHTML = msgError;

        campo.parentNode.appendChild(textError);
}

//Agrega el error de cabecera 
function errorAlert(nodeRef) {
    let divAlert = document.createElement('DIV');
    divAlert.classList.add('col-12', 'error'); 
    
    divAlert.innerHTML = `
        <div class="alert alert-danger fw-bold" role="alert">
            Some fields are missing
        </div>
    `;

    let parentDiv = nodeRef.parentNode.parentNode;
    let childrenDiv = nodeRef.parentNode;

    parentDiv.insertBefore(divAlert, childrenDiv);
}