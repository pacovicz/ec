

function criptografar(){

    var data = {"usuario": "eduardo.lino", "senha": CryptoJS.SHA256("123456").toString()};

    var mensagem = JSON.stringify(data).toString();

    var chave = CryptoJS.enc.Utf8.parse("1234567887654321");
    var iv = "1234567890";

    var criptografado = CryptoJS.AES.encrypt(mensagem, chave, {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });

    $.ajax({
        type: "POST",
        url: "php/descriptografar.php",
        data: {
            "message": criptografado.toString()
        }
    });

}