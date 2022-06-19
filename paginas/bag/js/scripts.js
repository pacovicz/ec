$(document).ready(function () {
  carregarProdutos();
  criaInfoEnvio();
});

const ELEMENTO_CARREGANDO = "";

function adicionarNoCarrinho(id){
  var data = {
    'id':id
  }
  data_encrypt = criptografar_private(data)
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
      message:data_encrypt
    },
    url: "php/adicionarItem.php",
  })
  const produtosDiv = document.querySelector(".produtos");
  produtosDiv.innerHTML = ""
  carregarProdutos()
}

function retirarDoCarrinho(id) {
  var data = {
    'id':id
  }
  data_encrypt = criptografar_private(data)
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
      message:data_encrypt
    },
    url: "php/removerItem.php",
    success: function (retorno) {
      
    }
  })
  const produtosDiv = document.querySelector(".produtos");
  produtosDiv.innerHTML = ""
  carregarProdutos()
}

function carregarProdutos(){
    precoTotal = 0;
    $.ajax({
      dataType: "json",
      type: "GET",
      url: "php/phpCarrinho.php",
      success: function (retorno) {
        const produtos = retorno;
        const produtosDiv = document.querySelector(".produtos");
        for (let i = 0; i < produtos.length; i++) {
          const produto = produtos[i];
          precoTotal = precoTotal + parseInt(produto.preco)
          produtosDiv.innerHTML +=
            `<div class='produto'>` +
            `<div class='card'>` +
            `<img class='imgCard' src='${produto.imagem}'> ` +
            `<span>${produto.nome}</span> ` +
            `<div class='acoes'> ` +
            `<button id='btnMenos' onclick='retirarDoCarrinho(${produto.id_compra})'><i class='fas fa-minus'></i></button> ` +
            `<b class='countA' ></b> ` +
            `<button id='btnMais' onclick='adicionarNoCarrinho(${produto.id})'><i class='fas fa-plus'></i></button> ` +
            `</div>` +
            `</div> `
          const envioInfo = document.querySelector(".infos");
          envioInfo.innerHTML =
            `<div class='controle-valores'>` +
            `<div class='subtotal-configura'>` +
            `<span id='text-subtotal'>Subtotal</span>` +
            `<div id='subtotal-valor'>$${precoTotal}.00</div>` +
            `</div>` +
            `<div class='taxes-configura'>` +
            `<span id='taxes-taxes' class='taxes'>Taxes</span>` +
            `<div id='text-taxes' class='taxes'>Calculated at checkout</div>` +
            `</div>` +
            `<div class='barra'>` +
            `<span id='barrinha1' class='barrinha'></span>` +
            `</div>` +
            `<div class="estimated-total">` +
            `<span id='text-estimated-total' class='est-total'>Estimated total</span>` +
            `<div id='est-total-valor' class='est-total'>$${precoTotal}.00</div>` +
            `</div>` +
            `<div class='barra'>` +
            `<span id='barrinha2' class='barrinha'></span>` +
            `</div>` +
            `<a href='http://dontpad.com/willinlindo'>` +
            `<button class='btn-checkout' >Continue to checkout</button>` +
            `</a>` +
            `</div>`;
      }
       
    }
  })
}


function criaInfoEnvio() {
  const envioInfo = document.querySelector(".arriveDay");
  envioInfo.innerHTML +=
    `<div class='compraCredenciais'>` +
    `<div class='infoEntrega'>` +
    `<h3 id='h3Entrega'>Shipping arrives, tomorrow.</h3>` +
    `</div>` +
    `<div class='divSvgId'>` +
    `<img class='icon' src='../../img/truck-solid.svg' width='60' height='60'>` +
    `<a href='http://dontpad.com/willinlindo' id='id'class='idCompra'>${parseInt(Math.random() * 10000000) + 1}</a>` +
    `</div>` +
    `</div>`;
}

