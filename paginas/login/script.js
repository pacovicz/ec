function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "session.php",
    success: function( retorno ) {
        console.log(retorno);
        if(retorno == 1){
          location.href = "/ec/paginas/principal/principal.html";
        } else if (retorno == 2){
          alert("sessão inválida!");
        }
    }
});  
}

function signin() {
    var email = $("#email").val();
    var senha = $("#password").val();
    var senhaHash = hashCode(senha);
    sendToServer(email, senhaHash);
    //continuar
  }
function sendToServer(email, senhaHash){
  
    $.ajax({
        dataType: "json",
        type: "POST",
        data: {
            email: email,
            senhaHash: senhaHash
        },
        url: "php.php",
        success: function( retorno ) {
            if(retorno == "0"){
              location.href = "/ec/paginas/doubleauth/login.html";
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
