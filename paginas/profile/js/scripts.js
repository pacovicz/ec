function checaSessao(){
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
    },
    url: "php/session.php",
    success: function( retorno ) {
        if(retorno == "Session not valid, please log-in"){
          location.href = "/ec/paginas/login/index.html";
        } else if (retorno == "Not autenticated, please autenticate"){
          alert("Not autenticated, please autenticate")
          location.href = "/ec/paginas/doubleauth/index.html";
        }
        
    }
});  
}
  function encerrarSessao(){
    $.ajax({
      dataType: "json",
      type: "POST",
      data: {
      },
      url: "php/encerrarSessao.php",
      success: function( retorno ) {
          if(retorno == "Logged out"){
          document.location.reload();
          }
      }
  });  
  }

  window.onload = checaSessao();