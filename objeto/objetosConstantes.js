/* Essa aulas explicamos que, quando armazenamos um objeto em uma constante, apesar da constante não poder ser alterada, é possível mudar alguns dados do
do objeto. Isso acontece porque a constante criada não armazena o objeto, e sim o indereço de memoria onde está o objeto, sendo assim, o endereço não 
pode ser mudado, porém os dados lá dentro do endereço pode, ou seja, os atributos do objeto podem ser alterados.  */

/* pessoa -> 123 -> {....} */
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

/* pessoa -> 456 -> {....} */
/* pessoa = { nome: 'Ana' } */

/* Impede qualquer alteração feita no objeto, ou seja, ele está congelado. */
Object.freeze(pessoa) 

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

/* É possível criar um objeto constante, em que absolutamte nada vai pode ser alterado. */
const pessoaConstante = Object.freeze({ nome: 'João' })
delete pessoaConstante.nome
console.log(pessoaConstante)