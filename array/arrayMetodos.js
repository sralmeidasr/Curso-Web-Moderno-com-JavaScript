const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // remove o último elemento do array
console.log(pilotos)
pilotos.push('Verstappen') // adiciona novos elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)
pilotos.unshift('Hamilton') // adiciona novos elemento no começo do array
console.log(pilotos)

// splice pode adicionar e remover elementos do array
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// splice para remover
pilotos.splice(3, 1)
console.log(pilotos)

// slice serve para retornar um novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)