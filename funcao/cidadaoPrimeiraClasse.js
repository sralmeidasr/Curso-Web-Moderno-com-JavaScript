// Função em JS é First-Class Object (Citizens)
// Higher-order function

// função de forma literal
function fun1() { }

// É possível armazenar uma função em uma variável
const fun2 = function () { }

// É possível armazenar uma função em um array
const array = [function(a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// É possível armazenar uma função em um atriburo de um objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// Função como parâmetro para outra função
function run(fun) {
    fun()
}

run(function() {console.log('Executando...')})

// Um função pode retornar outra função, ou seja, uma função pode conter outra.
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(2)
const funcaoSoma = soma(2, 3)
funcaoSoma(2)

// Todas as cituações acimas não possívei com a função arrow, que sese caso está sendo armazenada dentro de uma variável.
const somaArrow = (a, b) => {
    return a + b
}

console.log(somaArrow(2, 3))

// Função co, retorno implícito e mais reduzida (arrow)
const subtracao = (c, d) => c - d
console.log(subtracao(2, 3))