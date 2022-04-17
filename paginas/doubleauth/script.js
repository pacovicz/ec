function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "session.php",
    success: function( retorno ) {
        if(retorno == 0){
          location.href = "/ec/paginas/principal/principal.html"
        }
    }
});  
}

function auth() {
    var email = $("#auth").val();

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
        url: "php.php",
        success: function( retorno ) {
            if(retorno == "0"){
              document.location.reload();
            } else {
              document.getElementById("teste").innerHTML = "<div class='teste'>Incorrect email or password.</div>";
            }
        }
    });
}
  
function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
    }
  
    window.onload = checaSessao();
