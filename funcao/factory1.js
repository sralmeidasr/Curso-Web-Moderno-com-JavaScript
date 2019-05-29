// Uma função 'factory' é uma função que retorna um 'objeto', ou seja, ela é uma fábrica de objetos. Então você cria novos objetos a partir da chamada
// dessa função.

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())