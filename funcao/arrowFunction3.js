let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // nesse caso o 'this' pertence a arrow function.
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // mesmo com a função 'bind' o 'this' da arrow function continua pertencendo ao contexto da função, ou seja, ao contexto em que ela foi denifida.
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)