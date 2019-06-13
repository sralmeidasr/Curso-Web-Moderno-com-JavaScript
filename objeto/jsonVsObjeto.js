/** JSON - JavaScript Object Notation 
 * Ao trocar dados entre um navegador e um servidor, os dados podem ser apenas texto. JSON é texto e podemos converter qualquer 
 * objeto JavaScript em JSON e enviar esse código para o servidor. Também podemos converter qualquer código JSON recebido do 
 * servidor em objetos JavaScript. Dessa forma, podemos trabalhar com os dados como objetos JavaScript, sem análises e traduções 
 * complicadas.
*/

const obj1 = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj1))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

const obj2 = { a: 1.8, b: 'string', c: true, d: {}, e: [] }
console.log(JSON.stringify(obj2))
console.log(JSON.parse('{"a":1.8,"b":"string","c":true,"d":{},"e":[] }'))