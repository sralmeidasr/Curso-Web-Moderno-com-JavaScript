/**
 * A estrutura de repetição 'while' é ideal para executar laços indeterminados de repetição.
 */

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioentre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Ate a próxima!')