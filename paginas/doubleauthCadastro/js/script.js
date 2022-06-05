function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "php/session.php",
    success: function( retorno ) {
        if(retorno != "Cadastro autenticado"){
        alert("Non-valid session, please log-in")
        location.href = "/ec/";
        }
    }
});
$.ajax({
  dataType: "json",
  type: "POST",
  data: {
  },
  url: "php/recebeEmail.php",
  success: function( retorno) {
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
    success: function( retorno ) {
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
          if(retorno == "Success"){
            location.href = "/ec/paginas/login/index.html";
          } else if (retorno == "Invalid Code"){
            document.getElementById("divTeste").innerHTML = "<div class='teste'>Invalid Code</div>";
          }
        }
    });
}
window.onload = checaSessao(), enviarEmail();