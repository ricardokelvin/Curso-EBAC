const form = document.getElementById('last-form');

let numberConfirm = false;

function validacao(firstNumber, secondNumber) {
    return secondNumber > firstNumber;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;

    const successMessage = `Acertou! O primeiro número é maior que o segundo.`;
    const errorMessage = `Tente outra vez!`;


    numberConfirm = validacao(firstNumber, secondNumber);

        if (!numberConfirm) {
            const containerMensagemErro = document.querySelector('.error-message');
            containerMensagemErro.innerHTML = errorMessage;
            containerMensagemErro.style.display = "block";

            firstNumber.value = "";
            secondNumber.value = "";
        } else {
            const containerMensagemSucesso = document.querySelector('.success-message');
            containerMensagemSucesso.innerHTML = successMessage;
            containerMensagemSucesso.style.display = "block";

            firstNumber.value = "";
            secondNumber.value = "";
        }
});

/*form.addEventListener('submit', function (e) {
    e.
})
*/