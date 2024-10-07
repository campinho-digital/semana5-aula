// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
    { nome: "Camisa", preco: 50.00 },
    { nome: "Calça", preco: 100.00 },
    { nome: "Sapato", preco: 150.00 },
    { nome: "Boné", preco: 25.00 }
];

// Carrinho de compras como um array de objetos
let carrinho = [];
let subtotal = [];
let total = [];


const nomeProduto = prompt('Produtos disponiveis:\n ----- \nCamisa R$50.00\n ----- \nCalça R$100.00\n ----- \nSapato R$150.00\n ----- \nBoné R$25.00\n ----- \nDigite o nome do produto:');
const precoProduto = parseFloat(prompt('Produtos disponiveis:\n ----- \nCamisa R$50.00\n ----- \nCalça R$100.00\n ----- \nSapato R$150.00\n ----- \nBoné R$25.00\n ----- \nDigite o preço do produto:'));
const quantidadeProduto = parseInt(prompt('Produtos disponiveis:\n ----- \nCamisa R$50.00\n ----- \nCalça R$100.00\n ----- \nSapato R$150.00\n ----- \nBoné R$25.00\n ----- \nDigite a quantidade do produto:'));

subtotal = precoProduto * quantidadeProduto
total = subtotal

// variável para saber se deseja continuar
let resposta = confirm(`Produto(s) selecionado(s)\n -----\n Produto: ${nomeProduto}\n Quantidade: ${quantidadeProduto}\n Preço ${precoProduto}\n \n Deseja continuar?`)

// condição para caso queira continuar
if (resposta){
    const nomeProduto = prompt('Produtos disponiveis:\n ----- \nCamisa R$50.00\n ----- \nCalça R$100.00\n ----- \nSapato R$150.00\n ----- \nBoné R$25.00\n ----- \nDigite o nome do produto:');
    const precoProduto = parseFloat(prompt('Produtos disponiveis:\n ----- \nCamisa R$50.00\n ----- \nCalça R$100.00\n ----- \nSapato R$150.00\n ----- \nBoné R$25.00\n ----- \nDigite o preço do produto:'));
    const quantidadeProduto = parseInt(prompt('Produtos disponiveis:\n ----- \nCamisa R$50.00\n ----- \nCalça R$100.00\n ----- \nSapato R$150.00\n ----- \nBoné R$25.00\n ----- \nDigite a quantidade do produto:'));
}else{
    alert(`Total da compra $R$${total}`)
}
carrinho.push(nomeProduto)

console.log(carrinho)