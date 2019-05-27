/**
 * Um objeto é a coleção de chaves e valor (// par nome/valor).
 */

 const saudacao = 'Opa' // contexto léxico 1 (é o local fisíco onde a sua variável foi declarada no código)

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
} 

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)