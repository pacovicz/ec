(function(){
    var $txt = blg.$('#text');

    var padraoCPF = /^([0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2})$/;
    var padraoEmail = /^[\w._-]+@[\w_.-]+\.[a-z]/i;
    
    $text.addEventListener('input', function(){
        var texto = this.value;
    })
})()



var expresso = /^([0-9]{8}[-][0-9]{4})$/;
var input = "12345678-1234";

var valcnpj = /^([0-9]{2}[.][0-9]{3}[.][0-9]{3}[/][0-9]{4}[-][0-9]{2})$/;
var inputcnpj = "33.555.921/0001-70";

var valnum = /^([(][0-9]{2}[)][0-9]{5}[-][0-9]{4})$/;
var inputnum = "(41)98888-5675";

console.log(expresso.test(input));
console.log(valcpf.test(inputcpf));
console.log(valcnpj.test(inputcnpj));
console.log(valnum.test(inputnum));