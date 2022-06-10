$(document).ready(function(){
  checaSessao();
  atualizaDados();
  carregarProdutos()
});
//window.onload = checaSessao(), atualizaDados(), carregarProdutos(); 

function checaSessao() {
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {},
    url: "php/session.php",
    success: function (retorno) {
      if (retorno == "Session not valid, please log-in") {
        location.href = "/ec/paginas/login/index.html";
      } else if (retorno == "Not autenticated, please autenticate") {
        alert("Not autenticated, please autenticate");
        location.href = "/ec/paginas/doubleauth/index.html";
      }

    }
  });
}

function atualizaDados() {
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {},
    url: "php/php.php",
    success: function (retorno) {
      document.getElementById("username").innerHTML = retorno;
    }
  });
}

  function encerrarSessao(){
    $.ajax({
      dataType: "json",
      type: "POST",
      data: {
      },
      url: "php/encerrarSessao.php",
      success: function( retorno ) {
          if(retorno == 0){
          document.location.reload();
          }
      }
  });  
}

function carregarProdutos() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/phpProdutos.php",
    success: function (retorno) {
      const produtos = retorno;
      const produtosDiv = document.querySelector(".produtos");  
      for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        produtosDiv.innerHTML +=
          `<div class='card'> ` +
          `<img class='imgCard'src=${produto.imagem}>` +
          `<span class='nameCard'>${produto.nome}</span>` +
          `<span class='precoCard'><a id='coin'>US$</a> ${produto.preco}</span>` +
          `<button class='btnCard' onclick='adicionarProduto(${produto.id}, ${produto.preco})'>Add to cart</button>` +
          `</div>`;
      }
    }
  });
}

const ELEMENTO_CARREGANDO = '';
const listaProdutos = document.querySelector('.produtos');

fetch('php/phpProdutos.php', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }
})
.then(res => {
  console.log(res)
  return res.json()
})
.then(produtos => {
  listaProdutos.innerHTML = '';
});

const carrinhoPersistido = JSON.parse(localStorage.getItem('carrinho'));
const carrinho = carrinhoPersistido == null ? []: carrinhoPersistido;
const reducer = (valorAnterior, valorAtual) => valorAnterior + valorAtual;
let qtdCarrinho = carrinho.length > 0 ? carrinho.map(x => x.qtd).reduce(reducer) : 0;

const round = (num, places) => {
	if (!("" + num).includes("e")) {
		return +(Math.round(num + "e+" + places)  + "e-" + places);
	} else {
		let arr = ("" + num).split("e");
		let sig = ""
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
	}
}


function adicionarProduto(id, preco) {
  const qtdCarrinhoIcon = document.querySelector('.qtd-carrinho');
  qtdCarrinhoIcon.classList.remove('escondido');
  qtdCarrinho++;
  qtdCarrinhoIcon.textContent = qtdCarrinho;
  const produtoNoCarrinho = carrinho.find(item => item.produto === id);
  if (produtoNoCarrinho) {
    produtoNoCarrinho.qtd++;
    produtoNoCarrinho.preco += round(preco,1);

  } else {
    carrinho.push({
      produto: id,
      qtd: 1,
      preco: preco,
    });
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

const qtdCarrinhoIcon = document.querySelector('.qtd-carrinho');
qtdCarrinhoIcon.classList.remove('escondido');
qtdCarrinhoIcon.textContent = qtdCarrinho;


