function exercicio6(){
    let quantidade = document.getElementById("quantidade").value;
    let preco = document.getElementById("preco").value;

    let sub = quantidade * preco;
    let desc = sub * 0.10;
    let total = sub - desc;

    document.getElementById("resultado").innerHTML = "O subtotal da compra é " + sub + " o desconto é de R$" + desc + " e o total da compra é R$" + total;
}