document.write("<h1>Aula 01 - Exercício 06</h1>");

var quant = prompt("Digite a quantidade de um produto: ");
var preco = prompt("Digite o preço da unidade do produto: ");

var subtotal = Number(quant) * parseFloat(preco);
var desconto = parseFloat(subtotal) * 0.10
var valorfinal = parseFloat(subtotal) - Number(desconto);

document.write("<p> O subtotal da compra é R$" + subtotal + " </p>");
document.write("<p> O valor do desconto é R$" + desconto + " </p>" );
document.write("<p> O valor total a pagar é R$" + valorfinal + " </p>");