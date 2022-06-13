function criptografar_private(data) {
  var mensagem = JSON.stringify(data);

  var chave = CryptoJS.lib.WordArray.random(8);
  var iv = CryptoJS.lib.WordArray.random(8);

  var criptografado = CryptoJS.AES.encrypt(
    mensagem,
    CryptoJS.enc.Utf8.parse(chave.toString()),
    {
      iv: CryptoJS.enc.Utf8.parse(iv.toString()),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding,
    }
  );

  chave = criptografar_public(chave);
  iv = criptografar_public(iv);

  data = {
    chave: chave.toString(),
    iv: iv.toString(),
    message: criptografado.toString(),
  };

  return data;
}
