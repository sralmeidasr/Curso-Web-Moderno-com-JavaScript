// nesse caso as {} são o destructuring e não um objeto
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// nesse caso as {} não é um destructuring e sim um objeto
const obj = { max: 50, min: 40 }
console.log(rand(obj))