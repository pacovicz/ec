function signup() {
  var username = $("#username").val();
  var cpf = $("#cpf").val();
  var email = $("#email").val();
  var senha = $("#password").val();
  var senhaHash = hashCode(senha);
  console.log(username, cpf, email, senhaHash);
  
  
  sendToServer(username, cpf, email, senhaHash);
  //continuar
}
function sendToServer(username, cpf, email, senhaHash){

  $.ajax({
      dataType: "json",
      type: "POST",
      data: {
          username: username,
          cpf: cpf,
          email: email,
          senhaHash: senhaHash
      },
      url: "php/index.php",
      success: function( retorno ) {
          console.log(retorno);
      }
  });
}

function login(event) {
  event.preventDefault();

  if (isFormInvalid(event.target)) {
    //avisar usuario
  }

  //continuar
}

function passwordForgotten(event) {
  event.preventDefault();

  if (isFormInvalid(event.target)) {
    //avisar usuario
  }

  //continuar
}

function resetPassword(event) {
  event.preventDefault();

  if (isFormInvalid(event.target)) {
    //avisar usuario
  }

  //continuar
}

const validations = {
  username: /^\w+$/,
  cpf: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
  email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{8,}$/,
};

function isInputValid(name, value) {
  const validation = validations[name];
  if (!validation) return true;
  
  return validation.test(value);

}

function isFormInvalid(inputs) {
  for (const input of inputs) {
    if (!isInputValid(input.name, input.value)) {
      //avisar usuario
      alert(input.name + " invalido");
      return true;
    }
  }

  return false;
}

function hashCode(str) {
  return str.split('').reduce((prevHash, currVal) =>
    (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }

