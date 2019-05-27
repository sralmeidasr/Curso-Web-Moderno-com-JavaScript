/* Armazenando um função em uma varial ou constante
 * Nesse caso eu chamo a função mas ela não retorna nenhum valor, eu passo os valores para ser armazenado nos parâmetros e ele 
 * soma e mostra dentro da função. 
 */
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

/* Armazenando um função arrow em uma varial ou constante
 * Nesse caso eu chamo a função é representada por (=>) ao invés de (function), sendo armazenada na variável (soma) e retornando o resultado pedido.
 */
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// retorno implícito e mais reduzido (arrow)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// ou retorno implícito da função arrow com um parâmetro

const imprimir2 = a => console.log(a)
imprimir2('Legal!!')