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

/********************************************************************************************************************/

const frutas = ['Maçã', 'Banana']
console.log(frutas[0], frutas[3])
console.log(frutas[4])

frutas[4] = 'Uva'
console.log(frutas)
console.log(frutas.length) /* retona quantos elementos eu tenho dentro do arrays */

frutas.unshift('Morango') /* essa função serve para adicinar mais coisas dentro do array, porém o 'unshift('dado')' adiciona 
sempre ao início do array. */
frutas.push({id: 3}, false, null, 'teste') /* essa função serve para adicinar mais coisas dentro do array, porém o 'push()' 
adiciona sempre ao final do array, sendo que nesse caso foram adicionados tipos de dados diferentes, o que não é adequado mas 
serve para mostrar a flexibilidade de JavaScript. */  
 
console.log(frutas)

console.log(frutas.shift()) /* essa função retira o primeiro elemento do array e mostra só o elemento retirado */
console.log(frutas.pop()) /* essa função retira o último elemento do array e mostra só o elemento retirado */

delete frutas[0] /* outra maneira de excluir um elemento da array, porém diferente das funções 'shift' e 'pop', ao usarmos 
'delete array[0]' ele mostra a mensagem '<1 empty item>' correspondente ao indice do array. */ 

console.log(frutas)