console.log("Hello World");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de compras como um array de objetos
let carrinho = [];

// Função para capturar produtos e adicionar ao carrinho
function capturarProdutos() {
  let continuarComprando = true;

  while (continuarComprando) {
    const nomeProduto = prompt("Digite o nome do produto:");
    const produtoEncontrado = produtosDisponiveis.find(
      (produto) => produto.nome.toLowerCase() === nomeProduto.toLowerCase()
    );

    if (produtoEncontrado) {
      const quantidade = parseInt(
        prompt(`Quantidade de ${produtoEncontrado.nome}:`)
      );
      carrinho.push({
        nome: produtoEncontrado.nome,
        preco: produtoEncontrado.preco,
        quantidade: quantidade,
      });
      alert(
        `Produto adicionado: ${produtoEncontrado.nome}, Preço: R$${produtoEncontrado.preco}, Quantidade: ${quantidade}`
      );
    } else {
      alert("Produto não encontrado!");
    }

    continuarComprando = confirm("Deseja adicionar mais produtos ao carrinho?");
  }

  calcularTotal();
}

// Função para calcular o total do carrinho
function calcularTotal() {
  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );
}

// Função para exibir o carrinho
function exibirCarrinho() {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio!");
  } else {
    let mensagem = "Produtos no carrinho:\n\n";
    let valorTotal = 0;

    carrinho.forEach((item) => {
      const subTotal = item.preco * item.quantidade;
      valorTotal += subTotal;
      mensagem += `${item.nome} - Preço: R$${item.preco} - Quantidade: ${
        item.quantidade
      } - SubTotal: R$${subTotal.toFixed(2)}\n`;
    });

    mensagem = mensagem + `\nValor Total da Compra: R$${valorTotal.toFixed(2)}`;
    alert(mensagem);
  }
}

// Exemplo de uso
capturarProdutos();
exibirCarrinho();
