function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "session.php",
    success: function( retorno ) {
        if(retorno != 0){
        location.href = "/ec/";
        }
    }
});
$.ajax({
  dataType: "json",
  type: "POST",
  data: {
  },
  url: "recebeEmail.php",
  success: function( retorno) {
      document.getElementById("msg").innerHTML = "We've sent a email to " + retorno + " to verify if you are yourself";
  }
});
}
function enviarEmail(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "enviaEmail.php",
    success: function( retorno ) {
        if(retorno == 0){
          document.getElementById("divTeste").innerHTML = "<div class='email'>Email Sent</div>";
        }
      } 
  });
}

function auth() {
    var codigo = $("#codigo").val();

    sendToServer(codigo);
    //continuar
  }
function sendToServer(codigo){
  
    $.ajax({
        dataType: "json",
        type: "POST",
        data: {
            codigo: codigo
        },
        url: "auth.php",
        success: function( retorno ){
          if(retorno == 0){
            location.href = "/ec/paginas/login/login.html";
          } else if (retorno == 1){
            document.getElementById("divTeste").innerHTML = "<div class='teste'>Invalid Code</div>";
          }
        }
    });
}
window.onload = checaSessao();