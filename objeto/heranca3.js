const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

/* Pega todos os atributos/chaves do objeto */
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

/* Para saber se todos os atributos do objeto pertençe a ele ou se foi herdado por herança, sendo que filha2.hasOwnProperty(key) verifica se o 
atributo pertence ao objeto e retorna verdadeiro ou falso + o atributo */
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}

/* Para percorrer todos os atributos do objeto mesmo que ele tenha herdado por herança  */
for (let key in filha2) {
    console.log(key)
}