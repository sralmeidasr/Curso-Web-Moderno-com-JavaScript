let valor // não inicializada, ou seja, nenhum valor foi declarado para essa variável
console.log(valor)

valor = null // ausência de valor, ou seja, não foi inicializada e não aponta para nenhum valor da memória
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)