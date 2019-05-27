console.log(7 / 0) // vai gerar uma imprecisão 'Infinity'
console.log("10" / 2) // No JavaScript é possível calcula string com números
console.log('3 ' + 2) // nesse caso ele não concatena, a string ganha, ou seja, ele vai juntar a string com o número
console.log('3 ' - 2) 
console.log("Show!" * 2) // NaN porque 'Show!' não é um número
console.log(0.1 + 0.7) // gera imprecisão
console.log((10).toFixed(2)) // Nesse caso = console.log(10.toString()) não funciona, mas se colocar o número entre parenteses sim = console.log((10).toFixed(2))