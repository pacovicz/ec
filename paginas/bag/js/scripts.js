const ELEMENTO_CARREGANDO = '';
let carrinho = JSON.parse(localStorage.getItem('carrinho'));

function adicionarNoCarrinho(id, produto) {
  const qtd = produto.parentNode.querySelector('b');
  qtd.textContent = parseInt(qtd.textContent) + 1;

  const produtoNoCarrinho = carrinho.find(item => item.produto === id);

  if (produtoNoCarrinho) {
    produtoNoCarrinho.qtd++;
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function retirarDoCarrinho(id, produto) {
  const qtd = produto.parentNode.querySelector('b');
  qtd.textContent = parseInt(qtd.textContent) - 1;

  const produtoNoCarrinho = carrinho.find(item => item.produto === id);

  if (produtoNoCarrinho) {
    produtoNoCarrinho.qtd--;

    if (produtoNoCarrinho.qtd === 0) {
      carrinho = carrinho.filter(item => item.produto !== id);
      qtd.closest('.produto').remove();
    }
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarPaginaCarrinho() {
  const listaProdutos = document.querySelector('.produtos');
  listaProdutos.innerHTML = ELEMENTO_CARREGANDO;

  fetch('../../paginas/principal/php/phpProdutos.php', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(produtos => {
      const listaProdutos = document.querySelector('.produtos');

      if (!carrinho) {
        listaProdutos.innerHTML = `<a class='semItem'>Nenhum item adicionado</a>`;
        
        return;
      }

      for (let i = 0; i < carrinho.length; i++) {
        const itemCarrinho = carrinho[i];
        const produto = produtos.find(p => p.id == itemCarrinho.produto);

        listaProdutos.innerHTML += 
        `<div class='produto'>`+
          `<div class='card'>` +
            `<img class='imgCard' src='${produto.imagem}'> `+
            `<span>${produto.nome}</span> `+
            `<div class='acoes'> `+
            `<button id='btnMenos' onclick='retirarDoCarrinho(${itemCarrinho.produto}, this)'><i class='fas fa-minus'></i></button> `+
              `<b class='countA' >${itemCarrinho.qtd}</b> `+ 
              `<button id='btnMais' onclick='adicionarNoCarrinho(${itemCarrinho.produto}, this)'><i class='fas fa-plus'></i></button> `+
          `</div>`+
        `</div> `+ 
        `</div>`;
      }

    });
}
carregarPaginaCarrinho();