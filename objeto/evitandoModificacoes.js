/* Object.preventExtensions -> proibe apenas que seja adicionado novos atributos ao objeto, qualquer outra mudança é permitida. */
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promição'
})
console.log(`Extensível: ${Object.isExtensible(produto)}`) /* Verifica se o objeto pode ser estendido */

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

/* Object.seal -> proibe que seja adicionado novos atributos ou deletados, mas permite alterações dos atributos existentes. */
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log(`Selado: ${Object.isSealed(pessoa)}`) /* Verifica se o objeto está selado */

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

/* Object.freeze = selado + atributos constantes */