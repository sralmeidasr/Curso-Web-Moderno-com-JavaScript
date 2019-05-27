var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/**
 * Aqui nesse exemplo temos a grande diferença entre as variáveis (var) e (let). Nesse caso, a variável (var) tem escopo global mas como 
 * a outra variável foi declarada como (let) dentro do bloco de código, então esse bloco/escopo é respeitado, fazendo com que duas variáveis
 * de mesmo nome possam coexistir sem que uma interfira na outra.
 * Então a variável (var) tem o escopo global e dentro da função. Já a variável (let) tem escopo global, dentro da função e ainda o escopo de bloco,
 * ou seja, se for declarado como (let) dentro de um bloco, esse bloco é respeitado e não fica passivel de alteração.
 */