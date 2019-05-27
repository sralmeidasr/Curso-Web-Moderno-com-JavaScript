/*
 * Em JavaScript os arrays são heterogêneos, ou seja, ele aceita números inteiros, reais e strings dentro de um array.  
 * Porém não ideal ter varios tipos diferentes de variáveis dentro de um array, o ideal é criar um array para cada tipo de variável ou constantes.
 */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // retona quantos elementos eu tenho dentro do arrays

valores.push({id: 3}, false, null, 'teste') // essa função serve para adicinar mais coisas dentro da array
console.log(valores)

console.log(valores.pop()) // essa função retira o último elemento do array
delete valores[0] // outra maneira de excluir um elemento da array
console.log(valores)