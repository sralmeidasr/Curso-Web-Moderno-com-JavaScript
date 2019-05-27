function respirar() {
        
    console.log(`${this.nome} está respirando...`);
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
