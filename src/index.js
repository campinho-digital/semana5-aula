console.log("Itens do carrinho");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0  }, // 0
  { nome: "Calça",  preco: 100.0 }, // 1
  { nome: "Sapato", preco: 150.0 }, // 2 
  { nome: "Boné",   preco: 25.0  }, // 3
];

// Carrinho de compras como um array de objetos
let carrinho = [];


// console.log´s para testar a saída de cada objeto da const produtosDisponiveis

  // console.log (produtosDisponiveis[0]);
  // console.log (produtosDisponiveis[2]);
  // console.log (produtosDisponiveis[3]);
  // console.log (produtosDisponiveis[1]);


// push e console.log para testar a adição de itens ao carrinho

// carrinho.push (produtosDisponiveis[3]);
// console.log(carrinho);

// função para adicionar itens ao carrinho

function addToCart() {

  // variavel para definir o loop da estrutura while
  let continuar = "s";

  // estrutura while que vai fazer um loop ate que o usuário diga que não quer mais adicionar itens ao carrinho
  while (continuar === "s") {

    // aqui o programa pede pro usuário escolher de acordo com a numeração dos itens e exibe o prompt com eles
    alert(`Escolha de acordo com a listagem numérica`);
    let add = prompt(`Qual item gostaria de adicionar ao carrinho? (0) Camisa, (1) Calça, (2) Sapato, (3) Boné`);

    // aqui o conteudo da variavel "add" é usado como posicionamento para acessar os itens do array
    //parceint() é usado para transformar os dados da variavel "add" em numerico ja que o prompt os recebe como string
    carrinho.push(produtosDisponiveis[parseInt(add)]);

    // o valor da variavel "continuar" é alterado para continuar ou dar fim ao loop
    continuar = prompt(`Adicionar outro item ao carrinho? s/n`);
  }

  // o conteudo salvo no carrinho é exibido no console 
  console.log(carrinho);
}

addToCart();
