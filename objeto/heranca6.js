function Conversa(nome, fala) {
    this.nome = nome
    this.fala = fala
}

const fala1 = new Conversa('João', 'Vamos sair gata?')
const fala2 = new Conversa('Ana', 'Claro vamos sim!')
console.log(fala1, fala2)

/* Simulando o new */
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const fala3 = novo(Conversa, 'João', 'Vamos sair gata?')
const fala4 = novo(Conversa, 'Ana', 'Claro vamos sim!')
console.log(fala3, fala4)