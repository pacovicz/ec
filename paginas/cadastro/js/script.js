
function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "php/session.php",
    success: function( retorno ) {
        if(retorno == "Already logged in"){
          alert("You are already logged in")
          location.href = "/ec/paginas/principal/index.html"
        }
    }
});  
}
function signup(event) {
  event.preventDefault();

  if (isFormInvalid(event.target)) {
    //avisar usuario
  } else {
    data = { 
      'username': $("#username").val(),
      'cpf': $("#cpf").val(),
      'email': $("#email").val(),
      'senhaHash': hashing($("#password").val())
    }
    encrypt_data = criptografar_private(data);
    sendToServer(encrypt_data);
  }
}
function sendToServer(data){

  $.ajax({
      dataType: "json",
      type: "POST",
      data: {
          message: data
      },
      url: "php/index.php",
      success: function( retorno ) {
        if(retorno == "Success"){
          location.href = "/ec/paginas/doubleauthCadastro/index.html"
        } else if (retorno == "Email already taken"){
          document.getElementById("divAlerta").innerHTML = "<div class='alerta'>Email already taken</div>";
        }
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
      document.getElementById("divAlerta").innerHTML = "<div class='alerta'>" + input.name + " inválido!</div>";
      return true;
    }
  }

  return false;
}

function hashing(senha){
  const myString = senha
  const myBitArray = sjcl.hash.sha256.hash(myString)
  const myHash = sjcl.codec.hex.fromBits(myBitArray)
  return myHash;
}
  window.onload = checaSessao();

