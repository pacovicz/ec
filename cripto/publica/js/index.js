

function criptografar(){

    var data = {"nome": $("#nome").val(), "senha": CryptoJS.SHA256($("#senha").val()).toString()};

    var valores = JSON.stringify(data);

    var criptografia = new JSEncrypt();
    criptografia.setPublicKey($("#chavePublica").val());

    var mensagem_cript = criptografia.encrypt(valores);

    console.log(mensagem_cript);

    $.ajax({
        type: "post",
        data: {dados: mensagem_cript},
        url: "php/descriptografar.php"
    });


}