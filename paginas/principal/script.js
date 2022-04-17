function checaSessao(){
    $.ajax({
      dataType: "json",
      type: "POST",
      data: {
      },
      url: "session.php",
      success: function( retorno ) {
          if(retorno == 1){
            location.href = "/ec/paginas/login/login.html";
          } else if (retorno == 2){
            alert("sessão inválida.")
            location.href = "/ec/paginas/login/login.html";
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
      url: "php.php",
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
      url: "encerrarSessao.php",
      success: function( retorno ) {
          if(retorno == 0){
          document.location.reload();
          }
          
      }
  });  
  }