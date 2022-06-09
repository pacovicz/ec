function myFunc(success) {
    //do what you want HERE.
    
    console.log(success)
    
    }
    
    fetch('https://reqres.in/api/users?page=2')
        .then(data => data.json())
        .then(success => myFunc(success));
async function criptografar(){
    chave = await teste()

    var data = {"nome": $("#nome").val(), "senha": CryptoJS.SHA256($("#senha").val()).toString()};

    var valores = JSON.stringify(data);

    var criptografia = new JSEncrypt();
    criptografia.setPublicKey(chave);

    var mensagem_cript = criptografia.encrypt(valores);
    console.log(chave)
    console.log(mensagem_cript);

    $.ajax({
        type: "post",
        data: {dados: mensagem_cript},
        url: "php/descriptografar.php"
    });


}