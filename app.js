const formulario = document.getElementById('formulario');
let existError = true;

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', valideForm);
});

function valideForm(e){
    e.preventDefault();
    let cardNumber = formulario['inputCardNumber'];

    if(cardNumber.value === "") {
        validaInput(cardNumber, "Please provide a valid card number");
    }
}

function validaInput(campo, msgError) {
    if(existError) {
        let textError = document.createElement('p');
        textError.style.color = 'red'
        textError.innerHTML = msgError;

        campo.parentNode.appendChild(textError)
        existError = false;
    }
    
}