function exercicio4(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    let area = base * altura;
    document.getElementById("resultado").innerHTML = "A área do triângulo é " + area;
}