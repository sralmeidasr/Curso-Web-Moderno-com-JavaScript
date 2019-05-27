/**
 * A propósta aqui é criar um array e tentar incluir novos valores no array usando uma estrutra de repetição.
 */

const funcs = [] 

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()