/**
 * Em JS o 'this' pode mudar dependendo de como é declarado uma função. Então o 'this' pode ser global, ou então pode também pertencer ao 
 * contexto léxico da função. O 'this' nunca muda quando a funçao cria foi a 'arrow', porém na declaração dos outros tipos de funções o 
 * 'this' muda.
 */

function respirar() {
        
    console.log(`${this.nome} está respirando...`)
}

const respirar = () => {
    console.log(`${this.nome} está respirando...`)
}
 
const cachorro = {
    nome: "Doug",
    raca: "Mastiff",
    respirar
}
const gato = {
    nome: "Ronnie",
    raca: "Munchkin",
    respirar
}
 
cachorro.respirar()
gato.respirar()