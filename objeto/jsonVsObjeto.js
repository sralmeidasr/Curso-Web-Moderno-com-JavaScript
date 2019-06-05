const obj1 = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj1))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

const obj2 = { a: 1.8, b: 'string', c: true, d: {}, e: [] }
console.log(JSON.stringify(obj2))
console.log(JSON.parse('{"a":1.8,"b":"string","c":true,"d":{},"e":[] }'))