function checaSessao(){
    $.ajax({
      dataType: "json",
      type: "POST",
      data: {
      },
      url: "php/session.php",
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

  window.onload = checaSessao();