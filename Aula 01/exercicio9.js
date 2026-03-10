document.write ("<h1> Aula 01 - Exercício 09</h1>");

var valorInicial= prompt("Digite o valor inicial: ");
var taxa= prompt("Digite a taxa de juros: ");
var tempo= prompt("Digite o tempo(Anos): ");

var montante = Number(valorInicial) * (1 + (Number(taxa) * (Number(tempo))));

document.write("<p> O valor do montante é " + montante + " </p>")