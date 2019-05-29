console.log(soma(3, 4))
// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))

/**
 * No caso da 'function declaration' você pode chamar essa função antes mesmo dela ser declarada, porque o compilador da linguagem Javascript, carrega
 * todas as funções antes de fazer a leitura do código, com isso as funções já ficam prontas para o momento que o compilar começa a ler o código linha a
 * linha. Porém, esse efeito conhecido como 'hoisting,' não é possível ser usado nas funções 'function expression', 'named function expression' e nem
 * nas 'arrow function'.
 */