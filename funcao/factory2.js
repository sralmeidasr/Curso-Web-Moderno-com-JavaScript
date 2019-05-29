function criarProduto(nome, preco) {    
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1.550))
console.log(criarProduto('iPhone', 5.899))