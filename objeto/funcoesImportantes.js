const pessoa = {
    nome: 'Rebeca',
    idade: 13,
    peso: 43
}

/* Pega todos os atributos/chaves do objeto */
console.log(Object.keys(pessoa))

/* Pega todos os valores do objeto */
console.log(Object.values(pessoa))

/* Retorna um array do objeto com todos os seus atributos e seus respectivos valores */
console.log(Object.entries(pessoa))

/* Para recorrer todo os elemento do array, onde o 'forEach(([chave, valor]) => {}' representa o Destructuring. */
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/* Para definiar algumas propriedades do objeto, ideal para ter mais controle */
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/* Object.assign para concatenar os elementos de objetos (ECMAScript 2015) */
const destino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const objetoFinal = Object.assign(destino, obj1, obj2) /* O primeiro parâmetro da função 'assign()' é o objeto que irá receber os demais que vem atras dele */

console.log(objetoFinal)