/**
 * O 'for in' percorre o array pelo indice e não pelo valor contido no indice. Sendo que, o uso do 'for in' em array não é tão idicado, existem 
 * formas mais efetivas de se fazer isso.
 */
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) {
    console.log(i, notas[i])
}

/**
 * Nesse caso, o uso do 'for in' para objetos, lógicamente faz sentido ser usado.
 */
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}