var valorHora = Number(prompt("Digite o valor em horas: "));
var horasTrabalhadas = Number(prompt("Digite as horas trabalhadas: "));

var salario = valorHora * horasTrabalhadas * 30;

document.write("<p> O valor do salário é: "+ salario +" em 30 dias</p>");