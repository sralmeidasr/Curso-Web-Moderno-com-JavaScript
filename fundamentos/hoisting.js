/**
 * Hoisting é a ação de mover a variável para o topo quando você escreve o comando de imprimir a variável antes de declarar ela. 
 * Então mesmo que você tenha escrito [console.log(variavel)] antes de propriamente declarar essa varial, o hoisting em Javascript vai
 * jogar a variável para o topo.
 */

console.log('a =', a)
var a = 2
console.log('a =', a)

/**
 * Porém no caso de declaração de varial (let) esse efeito de hoisting não ocorre.
 */

 console.log('b =', b)
 let b = 3
 console.log('b =', b)