/* Cadia de protótipos (prototype chain) */

Object.prototype.attr0 = '0' /* Evitar esse tipo de coisa */

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
 }

const ferrari = {
     modelo: 'F40',
     velMax: 324
}

const volvo = {
     modelo: 'V40',
     status() {
         return `${this.modelo}: ${super.status()}`
     }
}

/* Estabelece uma relação de prototipo de ferrari para carro */
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())



/** Atenção: 
 * Mudar o [[Prototype]] de um objeto é, pela natureza de como os modernos mecanismos JavaScript otimizam os acessos de propriedade, 
 * uma operação muito lenta, em todos navegadores e mecanismos JavaScript. O efeito sobre o desempenho de alterar a herança são sutis 
 * e vastas e não se limitam simplesmente ao tempo gasto em obj.__proto__ = ... statement, mas pode estender a qualquer código que 
 * tem acesso a qualquer objeto cujo [[Prototype]] foi alterado. Se você se preocupa com desempenho, você deveria evitar configurar 
 * o [[Prototype]] de um objeto. Em vez disso, crie um novo objeto com o [[Prototype]] desejado usando Object.create(). 
 * Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
 */