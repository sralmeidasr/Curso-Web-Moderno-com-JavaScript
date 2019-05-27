var numero = 1

{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)

/**
 * Nesse exemplo a variável (var numero = 2) dentro do bloco de código subiscreveu a variável (var numero = 1) fora do bloco. Isso acontece porque
 * apesar de ambas não estarem no mesmo bloco, o escopo é global, ou seja, o bloco é ignorado fazendo a variável receber um novo valor. Se fosse 
 * uma função isso não aconteceria.
 */