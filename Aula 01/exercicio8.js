document.write("<h1>Aula 01 - Exercício 08</h1>");

var peso = prompt("Digite o seu peso(Kg): ");
var altura = prompt("Digite a sua altura (metros): ");

var imc = Number(peso) / (Number(altura) * Number(altura));

document.write("O valor do IMC é " + imc);