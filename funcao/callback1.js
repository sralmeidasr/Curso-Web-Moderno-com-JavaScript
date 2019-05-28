/**
 * Nesse caso uma 'função callback' nada mais é do que você passar uma função, sendo que e essa função será chamada só quando um evento acontecer. 
 * Nesse caso cada evento é os elementos de um array, então para cada elemento do array 'fabricantes' ele executa a ' função callback', daí quando 
 * ele encontra outro elemento dentro do array, novamento a 'função callback' é chamada. Sendo assim, isso acontece para todos os elemento do array.
 */

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))