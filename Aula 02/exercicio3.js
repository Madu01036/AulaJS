function exercicio3() {
    let valor = parseFloat(document.getElementById("valor").value);
    let juros = parseFloat(document.getElementById("juros").value);
    let dias = parseInt(document.getElementById("dias").value);

    let parcela = valor + (valor * (juros / 100) * dias);

    document.getElementById("resultado").innerHTML =
        "O valor da parcela é R$ " + parcela;
}