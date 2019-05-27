/**
 * Alguns cuidados importantes
 * 
 */

function teste1(num) {
    if(num > 7) // nesse caso ao escrever uma estrutura de controle 'if' sem o '{}' executa apenas uma única sentença de código
        console.log(num)
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // aqui o 'if' está executando o ';' e não o que está dentro do '{}'
        console.log(num)
    }
}

teste2(6)
teste2(8)