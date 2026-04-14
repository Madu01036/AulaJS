function exercicio(){
    let valorInicial = Number(document.getElementById("valorInicial").value);
    let taxa = Number(document.getElementById("taxa").value);
    let tempo = Number(document.getElementById("tempo").value);

    let montante = valorInicial * (1 + (taxa * tempo));

    document.getElementById("resultado").innerHTML = "O valor do montante é R$" + montante;
}