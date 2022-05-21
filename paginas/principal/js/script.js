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
  window.onload = checaSessao();

  function atualizaDados(){
    $.ajax({
      dataType: "json",
      type: "POST",
      data: {
      },
      url: "php/php.php",
      success: function( retorno ) {
        document.getElementById("username").innerHTML = retorno;
      }
  });  
  }
  window.onload = atualizaDados();

  function encerrarSessao(){
    $.ajax({
      dataType: "json",
      type: "POST",
      data: {
      },
      url: "php/encerrarSessao.php",
      success: function( retorno ) {
          if(retorno == 0){
          document.location.reload();
          }
      }
  });  
  }