function exercicio6(){
    let quantidade = document.getElementById("quantidade").value;
    let preco = document.getElementById("preco").value;

    let sub = quantidade * preco;
    let desc = sub * 0.10;
    let total = sub - desc;

    document.getElementById("sub").innerHTML = "O subtotal da compra é " + sub;
}