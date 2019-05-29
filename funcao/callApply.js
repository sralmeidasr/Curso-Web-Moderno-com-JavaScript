// 'Call & Apply' são maneiras diferentes de se chamar/invocar uma função, sendo que a diferença entre elas, é a maneira de escrever o parâmetro 
// da função que irá ser cahamda.

function getPreco(imposto = 0, moeda = 'R$') {
    return `${this.nome} - ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = { nome: 'BMW', preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, 'u$'))
console.log(getPreco.apply(carro, [0.17, 'u$']))