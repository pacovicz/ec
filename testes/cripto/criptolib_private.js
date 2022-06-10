
function criptografar_private(data){

    var data = {"usuario": "eduardo.lino", "senha": CryptoJS.SHA256("123456").toString()};

    var mensagem = JSON.stringify(data).toString();

    var chave = CryptoJS.lib.WordArray.random(8);
    var iv = CryptoJS.lib.WordArray.random(8);

    var criptografado = CryptoJS.AES.encrypt(mensagem, CryptoJS.enc.Utf8.parse(chave.toString()), {
        iv: CryptoJS.enc.Utf8.parse(iv.toString()),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });

    console.log(chave.toString())
    console.log(iv.toString())
    chave = criptografar_public(chave)

    $.ajax({
        type: "POST",
        url: "criptolib.php",
        data: {
            "chave": chave.toString(),
            "iv": iv.toString(),
            "message": criptografado.toString()
        }
    });

}