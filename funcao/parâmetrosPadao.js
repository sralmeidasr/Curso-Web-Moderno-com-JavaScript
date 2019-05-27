function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // esse método não permite soma com '0'


// método 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // para gerar o valor padrão caso o 'a' não seja informado.
    b = 1 in arguments ? b : 1 // 'in arguments' vai trazer trazer o indice de todos os parâmetros, sendo que o primeiro pârametro da função sempre começará com indice zero. Nesse caso, eu estou perguntando de existe o 'arguments' de indice 1, se existir pegue o valor de 'b', se não pegue o valor de '1'.
    c = isNaN(c) ? 1 : c // se o parâmetro for um número, pegue o '1' se não for pegue o 'c'
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do ECMA6-2015
function soma3(a =1, b = 1, c = 1) {
    return a + b + c 
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))