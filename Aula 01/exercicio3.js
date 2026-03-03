document.write("<h1> Aula 01 - Exercício 03 </h1>")

var valor = prompt ("Digite o valor da prestação em atraso: ")
var taxa = prompt ("Digite a taxa de juros: ")
var tempo = prompt ("Digite os dias de atraso: ")

var parcela = parseFloat(valor) + (parseFloat(valor) * ((Number(taxa)*Number(taxa))/100) * Number(tempo))

document.write("<p> O valor da parcela é " + parcela)