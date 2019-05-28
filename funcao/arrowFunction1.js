/**
 * O 'this' na arrow function não muda.
 */
let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'function literal'
}

ola = () => 'arrow function' // refatorando a variável que recebe a função 'ola'.
console.log(ola())