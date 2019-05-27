const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
// como javascrip é uma linguagem fracamente tipada, ela permite esse tipo de comparação. Aqui a string 'Epa!' foi passada como parâmetro da função,
// em segui o 'if' compara e não apresenta erro, mas o resulta é falso, já que 'Epa!' não pode ser >= 7
imprimirResultado('Epa!')