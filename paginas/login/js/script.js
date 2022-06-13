

function checaSessao() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/session.php",
    success: function (retorno) {
      console.log(retorno);
      if (retorno == 1) {
        location.href = "/ec/paginas/principal/index.html";
      } else if (retorno == 2) {
        alert("sessão inválida!");
      }
    },
  });
}

function signin() {
  sendToServer();
  //continuar
}
function sendToServer() {
  var data = {
    email: $("#email").val(),
    senha: hashing($("#password").val()),
  };

  encrypt_data = criptografar_private(data)

  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
      message: encrypt_data,
    },
    url: "php/php.php",
    success: function (retorno) {
      if (retorno == "Success") {
        location.href = "/ec/paginas/doubleauth/index.html";
      } else if (retorno == "Email doesnt exist in database") {
        document.getElementById("teste").innerHTML =
          "<div class='teste'>No account found with that email.</div>";
      } else {
        document.getElementById("teste").innerHTML =
          "<div class='teste'>Incorrect email or password.</div>";
      }
    },
  });
}


function hashing(senha){
  const myString = senha
  const myBitArray = sjcl.hash.sha256.hash(myString)
  const myHash = sjcl.codec.hex.fromBits(myBitArray)
  return myHash;
}