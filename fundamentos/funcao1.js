// Função sem retorno 

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // apesar da função imprimirSoma ter (a) e (b) como parâmetro, é possível informar apenas um valor na chamada da função.
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // JavaScript suporta que seja passado varios valores quando se chama a função, mesmo quando a função foi declarada com um número menor de parâmetros.
imprimirSoma()

// Função com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
