function exemplo2() {
    let numero = Number(document.getElementById("numero").value);

    let quadrado = numero ** 2;
    let cubo = numero ** 3;

    document.getElementById("resultado").innerHTML = "<p>O quadrado do número é "+ quadrado + " e o cubo é " + cubo + "</p>";
}