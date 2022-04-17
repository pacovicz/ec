function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "session.php",
    success: function( retorno, retorno2) {
        if(retorno == 0){
          location.href = "/ec/paginas/principal/principal.html";
        }
        if(retorno == 1){
          location.href = "/ec/paginas/login/login.html";
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
            location.href = "/ec/paginas/principal/principal.html";
          }
        }
    });
}
  
function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
    }
  
    window.onload = checaSessao();
