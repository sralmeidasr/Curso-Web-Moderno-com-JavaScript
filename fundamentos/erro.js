function tratarErroElancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // retorna o que o programador quiser
        nome: erro.name,
        msg: erro.message,
        date: new Date 
    }
}

function imprimirNomeGritado(obj) {
    try { // pega os erros do programa e joca no catch
        console.log(obj.name.toUpperCase() + '!!')
    } catch (e) { // se for detectado um erro no 'try' então ele envia para o catch tratar
        tratarErroElancar(e)
    } finally { // sempre é executado independente de ter erro ou não
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)