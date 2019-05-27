console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// existem duas maneiras de criar objetos de maneira dinamica, ou seja, dinamica é quando você cria o objeto mas inclui os nomes/valores fora 
// do objeto, sendo assim, essa inclusão pode ser feita como (obj1.nome = 'Bola') ou (obj1['nome'] = 'Bola').
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
