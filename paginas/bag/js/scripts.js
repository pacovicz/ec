$(document).ready(function () {
  carregarProdutos();
  criaInfoEnvio();
  criaValores();
});

const ELEMENTO_CARREGANDO = "";
let carrinho = JSON.parse(localStorage.getItem("carrinho"));

function adicionarNoCarrinho(id, produto, preco) {
  const qtd = produto.parentNode.querySelector("b");
  qtd.textContent = parseInt(qtd.textContent) + 1;
  const produtoNoCarrinho = carrinho.find((item) => item.produto === id);
  if (produtoNoCarrinho) {
    produtoNoCarrinho.qtd++;
    produtoNoCarrinho.preco += produtoNoCarrinho.valor;
  } else {
    carrinho.push({
      produto: id,
      qtd: 1,
      valor: preco,
      preco: preco,
    });
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  criaValores();
}

function retirarDoCarrinho(id, produto) {
  const qtd = produto.parentNode.querySelector("b");
  qtd.textContent = parseInt(qtd.textContent) - 1;

  const produtoNoCarrinho = carrinho.find((item) => item.produto === id);

  if (produtoNoCarrinho) {
    produtoNoCarrinho.qtd--;
    produtoNoCarrinho.preco -= produtoNoCarrinho.valor;

    if (produtoNoCarrinho.qtd === 0) {
      carrinho = carrinho.filter((item) => item.produto !== id);
      qtd.closest(".produto").remove();
    }
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  criaValores();
}

function carregarProdutos(){
    $.ajax({
      dataType: "json",
      type: "GET",
      url: "php/phpCarrinho.php",
      success: function (retorno) {
        const produtos = retorno;
        const produtosDiv = document.querySelector(".produtos");
        for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        produtosDiv.innerHTML +=
        `<div class='produto'>` +
        `<div class='card'>` +
        `<img class='imgCard' src='${produto.imagem}'> ` +
        `<span>${produto.nome}</span> ` +
          `<div class='acoes'> ` +
          `<button id='btnMenos' onclick='retirarDoCarrinho(this)'><i class='fas fa-minus'></i></button> ` +
          `<b class='countA' ></b> ` +
          `<button id='btnMais' onclick='adicionarNoCarrinho(this)'><i class='fas fa-plus'></i></button> ` +
          `</div>` +
          `</div> `
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
    `<a href='http://dontpad.com/willinlindo' id='id'class='idCompra'>${
      parseInt(Math.random() * 10000000) + 1
    }</a>` +
    `</div>` +
    `</div>`;
}

function criaValores() {
  precoTotal = 0;
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/phpCarrinho.php",
    success: function (retorno) {
      const produtos = retorno;
      for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        precoTotal = precoTotal + parseInt(produto.preco)
      }
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
  })    
  }
