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

  fetch('../../php/phpProduto.php', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(produtos => {
      const listaProdutos = document.querySelector('.produtos');
      const botaoFinalizar = document.querySelector('button');

      if (!carrinho) {
        listaProdutos.innerHTML = 'Nenhum item adicionado';
        botaoFinalizar.disabled = true;
        return;
      }

      botaoFinalizar.disabled = false;
      listaProdutos.innerHTML = '';
      for (let i = 0; i < carrinho.length; i++) {
        const itemCarrinho = carrinho[i];
        const produto = produtos.find(p => p.id == itemCarrinho.produto);

        listaProdutos.innerHTML += 
        `<div class='produto'>` +
        `<img src='${produto.imagem}'>` +
        <span>${produto.nome}</span>
        <div class="acoes">
              <button onclick="adicionarNoCarrinho(${itemCarrinho.produto}, this)"><i class="fas fa-plus"></i></button>
              <b>${itemCarrinho.qtd}</b>
              <button onclick="retirarDoCarrinho(${itemCarrinho.produto}, this)"><i class="fas fa-minus"></i></button>
            </div>
        </div>
        `;
      }
    });
}

carregarPaginaCarrinho();