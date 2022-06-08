function checaSessao() {
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {},
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
  mensagem_cripto = criptografar();
  sendToServer(mensagem_cripto);
  //continuar
}
function sendToServer(criptografado) {
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
      mensagem: criptografado,
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

function criptografar() {
  var data = {
    email: $("#email").val(),
    senha: CryptoJS.SHA256($("#password").val()),
  };

  var mensagem = JSON.stringify(data).toString();

  var chave = CryptoJS.enc.Utf8.parse("1234567887654321");
  var iv = "1234567890";

  var criptografado = CryptoJS.AES.encrypt(mensagem, chave, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  }).toString();

  return criptografado;
}
