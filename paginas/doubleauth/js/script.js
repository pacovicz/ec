function checaSessao() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/session.php",
    success: function (retorno) {
      if (retorno == "Already autenticated") {
        location.href = "/ec/paginas/principal/index.html";
      }
      if (retorno == "Not logged in") {
        alert("Invalid Session, please log-in");
        location.href = "/ec/paginas/login/index.html";
      }
    },
  });
}

function enviarEmail() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/enviaEmail.php",
    success: function (retorno) {
      document.getElementById("divTeste").style.backgroundColor = "white";
      document.getElementById("divTeste").innerHTML =
        "<div class='teste'>Email sent to " + retorno + "</div>";
    },
  });
}

function auth() {
  var data = { codigo: $("#codigo").val() };

  encrypt_message = criptografar_private(data);
  sendToServer(encrypt_message);
}

function sendToServer(message) {
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
      message: message,
    },
    url: "php/auth.php",
    success: function (retorno) {
      if (retorno == "Valid autentication") {
        location.href = "/ec/paginas/principal/index.html";
      } else {
        document.getElementById("divTeste").innerHTML =
          "<div class='teste'>Invalid Code</div>";
        console.log(retorno["codigoVerificacao"]);
      }
    },
  });
}

(window.onload = checaSessao()), enviarEmail();
