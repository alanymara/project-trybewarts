const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const btnLogIn = document.getElementById('btnLogin');

function checarLogIn(event) {
  event.preventDefault();
  console.log('email', inputEmail.value);
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    console.log('funcionou login', inputSenha.value);
    alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

btnLogIn.addEventListener('click', checarLogIn);
