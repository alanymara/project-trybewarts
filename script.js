const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const btnLogIn = document.getElementById('btnLogin');
const checkboxVerifica = document.querySelector('#agreement');
const btnSubmit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');

function checarLogIn(event) {
  event.preventDefault();
  // console.log('email', inputEmail.value);
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    // console.log('funcionou login', inputSenha.value);
    alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

btnLogIn.addEventListener('click', checarLogIn);

btnSubmit.disabled = true;
console.log('valor do check:', checkboxVerifica);

function verificaCheckAgreement() {
  if (checkboxVerifica.checked === true) {
    btnSubmit.disabled = false;
  }
}
checkboxVerifica.addEventListener('click', verificaCheckAgreement);

// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
function limiteDeCarac(valor) {
  const quantMax = 500;
  const total = valor.length;
  if (total <= quantMax) {
    const restante = quantMax - total;
    document.getElementById('counter').innerHTML = restante;
  } else {
    document.getElementById('textarea').value = valor.substr(0, quantMax);
  }
}

textarea.addEventListener('click', limiteDeCarac);
