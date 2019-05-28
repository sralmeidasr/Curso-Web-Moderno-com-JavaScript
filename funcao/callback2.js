const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(`Sem callback= ${notasBaixas1}`)

// Com callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(`Com callback= ${notasBaixas2}`)

// Callback com arrow function
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(`Callback com arrow function= ${notasBaixas3}`)

// Deixando a callback com arrow function mais funcional/elegante.
const notasMenorQue7 = notas => notas < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(`Deixando a callback com arrow function mais funcional= ${notasBaixas4}`)
