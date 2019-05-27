/** Escopo é onde aquela variável é visivel, ou seja, você declara uma variável e até onde ela fica visível? 
 * Atenção: quando você cria uma variável fora de uma função, essa variável se torna global, então essa variável pode ser subscrita por outros 
 * valores o tempo todo. É bom fugir de criar variaveis de escopo global, ou seja, variáveis fora de uma função.
 * Então a variável (var) tem dois escopo possíveis, você criar uma variável (var) global ou uma variável (var) dentro da function.
 */

 {
     {
         { 
            var sera = 'Sera?'
        }
    }
}

console.log(sera)
/* 
* Nesse caso a variável (var) fica visivel fora do bloco de código, em algumas linguagens o comando de imprimir a variavel tem que estar dentro
* do bloco de código, caso contrário a variável não fica acessivel fora do bloco de código/escopo. Nessa caso a varial (var) é visial fora do bloco
* mas se fossse uma função a varial não estaria visivel.
*/

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

/**
 * Aqui só vai ficar acessível a variável (var) dentro do bloco de código da função e fora desse escopo não.
 */