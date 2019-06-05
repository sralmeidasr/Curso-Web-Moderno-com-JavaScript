/* Quando se quer um nível maior de encapsulamento no programa, se usa o '_' antes do nome do atributo do objeto, para dizer que aquele atributo é 
privado. Dessa maneira, para acessar esses dados ditos privados, usamos os comando 'get' e 'set' */

const sequencia = {
   _valor: 1, // convenção
   get valor() { return this._valor++ },
   set valor(valor) { 
       if(valor > this._valor) {
            this._valor = valor
       } 
    } 
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)