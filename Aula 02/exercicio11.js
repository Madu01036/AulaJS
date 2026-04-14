function exercicio11() {
    let vpkm = Number(document.getElementById("vpkm").value);
    let km = Number(document.getElementById("km").value);
    let min = Number(document.getElementById("min").value);

    let total = (vpkm * km) + (min * 0.50);

    document.getElementById("resultado").innerHTML = "O valor total da corrida é R$" + total;

}