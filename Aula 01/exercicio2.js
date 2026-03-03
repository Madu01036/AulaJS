document.write("<h1> Aula 01 - Exercício 02</h1>")

var Fahrenheit = prompt ("Digite a temperatura em Fahrenheit: ");

var Celsius = ((Number(Fahrenheit) - 32 ) * 5)/9;
document.write("<p>",Fahrenheit + " é equivalente a "+ Celsius + "</p>");