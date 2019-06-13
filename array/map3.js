// Simulando um map()

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)

/* Dica: O que eu fiz pra entender: copio o código e fico mexendo em cada parte dele para saber o que muda. Depois procuro 
decorar o código resolvido e digito tudo de memória, 1, 2, 3... 10, 20 vezes. No esforço de relembrar e digitar acabo aos 
poucos compreendendo a lógica até entender tudo. */