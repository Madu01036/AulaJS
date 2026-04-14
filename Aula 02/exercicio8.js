function exercicio8(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    
    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML = "O imc é igual a " + imc;
}