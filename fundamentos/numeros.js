const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // retorna em verdadeiro ou falso se o valor na variável é inteiro.
console.log(Number.isInteger(peso2)) // retorna em verdadeiro ou falso se o valor na variável é inteiro.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Define quantas casas decimais eu quero mostrar depois do ponto.
console.log(media.toString()) // Transforma a variável em string.
console.log(media.toString(2)) // O incremento do valor (2) transforma a variável em valor binários.
console.log(typeof media) // Retorna o tipo de variável ou função. 
