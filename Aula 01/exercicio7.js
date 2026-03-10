document.write("<h1>Aula 01 - Aula 07</h1>");

var nota1 = prompt("Digite a primeira nota: ");
var nota2 = prompt("Digite a segunda nota: ");
var nota3 = prompt("Digite a terceira nota: ");

var total = Number(nota1) + Number(nota2) + Number(nota3);
var media = Number(total)/3;

document.write("<p> A média das notas é " + media + "</p>");