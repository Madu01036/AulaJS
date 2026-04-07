function exercicio2() {
    let fah = document.getElementById("fah").value;
    let cel = ((Number(fah) - 32) * 5) / 9;

    document.getElementById("resultado").innerHTML = fah + "°F é equivalente a " + cel + "°C";
}