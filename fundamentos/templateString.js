/*
 * Ideal quando se precisa fazer varias concatenações entre muitas variáveis, principalmente pelo fato de, com o uso de templete 
 * string, é possível pular linha quebrando a string no meio, coisa que na concatenação normal não é possível. 
 */

const nome = 'Rebeca'
 const concatenacao = 'Olá' + nome + '!'
 const templete = `
    Olá
    ${nome}!`
console.log(concatenacao, templete)

// expressões matematicas...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)