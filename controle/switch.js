/**
 * Alguns cuidados com o uso do 'switch': quando ele recebe o parâmetro e entra no 'case' correspondente, o 'switch' executa todos os outros 'cases'.
 * Então é necessario colocar a palavra reservada 'break' para que ele interrompa a execução e saia do laço do 'switch'.
 * É preciso tomar cuidado quando se usa 'switch', que o valor de dentro dos parênteses: 'switch()' não diferencia se 'true' ou 'false', ele só processa
 * parâmetros.
 * Além disso, o 'case' não suporta números reais ou valores boleanos, é preciso definicar parâmetros exatos para que o 'switch' entre em cada 'case'.
 */

const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10: // esse 'case' está fazio porque o resultado é igual ao 'case 9'. Quando isso ocorrer, eu posso deixar sem nada e colocar o resultado no próximo 'case', já que eles teram os resultados iguais.
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0: // o 'switch' não suporta por exemplo: 'case 3, 2, 1, 0:'
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)