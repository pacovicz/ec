function signup(event) {
  event.preventDefault();

  if (isFormInvalid(event.target)) {
    //avisar usuario
  }

  //continuar
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
