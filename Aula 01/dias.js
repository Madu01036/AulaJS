var nome = prompt("Digite seu nome");
var idade = prompt("Digite sua idade");
var altura = prompt("Digite sua altura");

console.log(nome);
console.log(idade);
console.log(altura);

document.write("<h1> Olá, seja bem-vindo ao JavaScript</h1>");
document.write(nome + "<br>");
document.write(idade + "<br>");
document.write(altura + "<br>");

var dias = idade * 365

document.write("<p style='color: red'>Você viveu " + dias + " dias</p>");