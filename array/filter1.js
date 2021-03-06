/* O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. */

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const apenasCaros = produtos => produtos.preco >= 500
const apenasFragil = produtos => produtos.fragil

const resultado = produtos.filter(apenasCaros).filter(apenasFragil)
console.log(resultado)