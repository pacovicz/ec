function myFunc(success) {
    chave = success;
    
    console.log(success)
    
    }
    
    fetch('chave_publica.pem')
        .then(data => data.text())
        .then(success => myFunc(success));

function criptografar_public(data){

    var valores = JSON.stringify(data.toString());

    var criptografia = new JSEncrypt();
    
    criptografia.setPublicKey(chave);

    var mensagem_cript = criptografia.encrypt(valores);
    
    return mensagem_cript;

}