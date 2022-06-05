
function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "php/session.php",
    success: function( retorno) {
        if(retorno == "Already autenticated"){
          location.href = "/ec/paginas/principal/index.html";
        }
        if(retorno == "Not logged in"){
          alert("Invalid Session, please log-in")
          location.href = "/ec/paginas/login/index.html";
        }
    }
  });
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "php/recebeEmail.php",
    success: function(retorno) {
        console.log("deu boa.")
    }
  });
}


function enviarEmail(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "php/enviaEmail.php",
    success: function(retorno) {
      document.getElementById("divTeste").style.backgroundColor = "white";
      document.getElementById("divTeste").innerHTML = "<div class='teste'>Email sent to " + retorno + "</div>";
      } 
  });
}


function auth() {
    var codigo = $("#codigo").val();
    sendToServer(codigo);
  }

function sendToServer(codigo){
  $.ajax({
      dataType: "json",
      type: "POST",
      data: {
          codigo: codigo
      },
      url: "php/auth.php",
      success: function( retorno ){
        if(retorno == "Valid autentication"){
          location.href = "/ec/paginas/principal/index.html";
        }  else if (retorno == "Invalid code"){
          document.getElementById("divTeste").innerHTML = "<div class='teste'>Invalid Code</div>";
        }
      }
  });
}
  

window.onload = checaSessao(), enviarEmail();

