$(document).ready(function () {
  checaSessao();
  atualizaDados();
  carregarProdutos();
});
window.onload = checaSessao(), atualizaDados(), carregarProdutos();

function checaSessao() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/session.php",
    success: function (retorno) {
      if (retorno == "Session not valid, please log-in") {
        location.href = "/ec/paginas/login/index.html";
      } else if (retorno == "Not autenticated, please autenticate") {
        alert("Not autenticated, please autenticate");
        location.href = "/ec/paginas/doubleauth/index.html";
      }
    },
  });
}

function atualizaDados() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/php.php",
    success: function (retorno) {
      document.getElementById("username").innerHTML = retorno;
    },
  });
}

function encerrarSessao() {
  $.ajax({
    dataType: "json",
    type: "GET",
    url: "php/encerrarSessao.php",
    success: function (retorno) {
      if (retorno == 0) {
        document.location.reload();
      }
    },
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
          `<button class='btnCard' onclick='adicionarNoCarrinho(${produto.id})'>Add to cart</button>` +
          `</div>`;
      }
    },
  });
}

function adicionarNoCarrinho(id){
  var data = {
    'id':id
  }
  data_encrypt = criptografar_private(data)
  const qtdCarrinhoIcon = document.querySelector(".qtd-carrinho");
  $.ajax({
    dataType: "json",
    type: "POST",
    data: {
      message:data_encrypt
    },
    url: "php/phpCarrinho.php",
    success: function (retorno) {
      qtdCarrinhoIcon.classList.remove("escondido");
      qtdCarrinhoIcon.textContent = retorno['count(*)'];
    }
  })
}