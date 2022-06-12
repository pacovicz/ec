const ELEMENTO_CARREGANDO = '';
let carrinho = JSON.parse(localStorage.getItem('carrinho'));

function adicionarNoCarrinho(id, produto, preco) {
  const qtd = produto.parentNode.querySelector('b');
  qtd.textContent = parseInt(qtd.textContent) + 1;
  const produtoNoCarrinho = carrinho.find(item => item.produto === id);
  if (produtoNoCarrinho) {
    produtoNoCarrinho.qtd++;
    produtoNoCarrinho.preco = preco + preco;

  } else {
    carrinho.push({
      produto: id,
      qtd: 1,
      valor: preco,
    });
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}


// function adicionarProduto(id, preco) {
//   const qtdCarrinhoIcon = document.querySelector('.qtd-carrinho');
//   qtdCarrinhoIcon.classList.remove('escondido');
//   qtdCarrinho++;
//   qtdCarrinhoIcon.textContent = qtdCarrinho;
//   const produtoNoCarrinho = carrinho.find(item => item.produto === id);
//   if (produtoNoCarrinho) {
//     produtoNoCarrinho.qtd++;
//     produtoNoCarrinho.preco += preco;

//   } else {
//     carrinho.push({
//       produto: id,
//       qtd: 1,
//       valor: preco,
//     });
//   }
//   localStorage.setItem('carrinho', JSON.stringify(carrinho));
// }
// const qtdCarrinhoIcon = document.querySelector('.qtd-carrinho');
// qtdCarrinhoIcon.classList.remove('escondido');
// qtdCarrinhoIcon.textContent = qtdCarrinho;


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

function criaInfoEnvio() {
  const envioInfo = document.querySelector('.arriveDay');
  envioInfo.innerHTML += 
  `<div class='compraCredenciais'>`+ 
    `<div class='infoEntrega'>`+
      `<h3 id='h3Entrega'>Shipping arrives, tomorrow.</h3>` + 
    `</div>`+
    `<div class='divSvgId'>`+
      `<img class='icon' src='../../img/truck-solid.svg' width='60' height='60'>`+
      `<a href='http://dontpad.com/willinlindo' id='id'class='idCompra'>323232</a>`+
    `</div>`+
   `</div>`;
}
criaInfoEnvio();

function criaValores() {
  const envioInfo = document.querySelector('.infos');
  envioInfo.innerHTML +=
  `<div class='controle-valores'>`+
    `<div class='subtotal-configura'>`+
      `<span id='text-subtotal'>Subtotal</span>`+
      `<div id='subtotal-valor'>$97.88</div>`+
    `</div>`+
    `<div class='taxes-configura'>`+
      `<span id='taxes-taxes' class='taxes'>Taxes</span>`+
      `<div id='text-taxes' class='taxes'>Calculated at checkout</div>`+
    `</div>`+
    `<div class='barra'>`+
      `<span id='barrinha1' class='barrinha'></span>`+
    `</div>`+
    `<div class="estimated-total">`+
      `<span id='text-estimated-total' class='est-total'>Estimated total</span>`+ 
      `<div id='est-total-valor' class='est-total'>$97.88</div>`+ 
    `</div>`+ 
    `<div class='barra'>`+
    `<span id='barrinha2' class='barrinha'></span>`+
    `</div>`+
      `<a href='http://dontpad.com/willinlindo'>`+
        `<button class='btn-checkout' >Continue to checkout</button>`+
      `</a>`+
  `</div>`;
}
criaValores();