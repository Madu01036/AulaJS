function exercicio5(){
    let lado = document.getElementById("lado").value;
    let area = lado * lado;

    document.getElementById("area").innerHTML = "A área do quadrado é " + area;
}