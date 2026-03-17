function somar2numeros(){

let num1, num2, soma;

num1 = document.getElementById("num1").value;
num2 = document.getElementById("num").value;

soma = Number(num1) + Number(num2);

document.getElementById("resultado").innerHTML = "Olá!!!" + soma
}