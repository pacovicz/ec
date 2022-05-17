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
    url: "enviaEmail.php",
    success: function( retorno ) {
          document.getElementById("divTeste").style.backgroundColor = "white";
          document.getElementById("divTeste").innerHTML = "<div class='teste'>Email sent to " + retorno + "</div>";
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
window.onload = checaSessao(), enviarEmail();