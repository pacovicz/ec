
function enviar(){
    
    
    var nome = $("#nome").val();
    console.log(nome);
    var hash = hashCode(nome);
    
    comunicarServidor(hash);
}

function comunicarServidor(parametro){

    $.ajax({
        dataType: "json",
        type: "POST",
        data: {
            dado: parametro
        },
        url: "php/index.php",
        success: function( retorno ) {
            console.log(retorno);
        }
    });

}
function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0);
  }
  