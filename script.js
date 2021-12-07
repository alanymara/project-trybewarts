const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const btnLogIn = document.getElementById('btnLogin');
const checkboxVerifica = document.querySelector('#agreement');
const btnSubmit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');

//  dados do formuario //

const formEvaluation = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmailForm = document.getElementById('input-email');
const selectHouse = document.querySelector('#house');

// decalações de funções //

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
  } else {
    btnSubmit.disabled = true;
  }
}
checkboxVerifica.addEventListener('click', verificaCheckAgreement);

// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
function limiteDeCarac() {
  console.log('retorna event', textarea.value);
  const quantMax = 500;
  const total = textarea.value.length;
  if (total <= quantMax) {
    const restante = quantMax - total;
    document.getElementById('counter').innerHTML = restante;
  } else {
    document.getElementById('textarea').value = textarea.value.substr(0, quantMax);
  }
}

textarea.addEventListener('keyup', limiteDeCarac);

function substituiFormulario(event) {
  const familiaTec = document.querySelector('input[name=family]:checked');
  const tecnologias = document.querySelectorAll('.subject:checked');
  const notasAvalia = document.querySelector('input[name=rate]:checked');
  event.preventDefault();
  let tecs = '';
  for (let i = 0; i < tecnologias.length; i += 1) {
    tecs += `${tecnologias[i].value}, `;
  }
  formEvaluation.innerText = `
    Nome: ${inputName.value} ${inputLastName.value}
    Email: ${inputEmailForm.value} 
    Casa: ${selectHouse.value}
    Família: ${familiaTec.value} 
    Matérias: ${tecs} 
    Avaliação: ${notasAvalia.value}
    Observações: ${textarea.value}
  `;
}

btnSubmit.addEventListener('click', substituiFormulario);
