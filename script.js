const form = document.getElementById('form');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');


function validar(){
  form.addEventListener('submit', aciona => {
    aciona.preventDefault();

    var firstName = nome.value.trim();
    var lastName = sobrenome.value.trim();
    var Email = email.value.trim();
    var password = senha.value.trim();

    if (firstName === ''){
      error(nome, 'First Name cannot be empty');
    }else{
      success(nome);
    }
  })

  function error(req, message){
    const controle = req.parentElement;
    const span = controle.querySelector('span');
    span.innerText = message;
    req.className += 'error';
    span.className += 'error-text';
  }

  function success(req){
    req.className += 'success'
  }
}