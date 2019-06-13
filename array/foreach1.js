/* forEach é idela para percorer os elementos de um array, mas existem outros métodos que fazem isso e ainda mais coisas, ou seja,
o forEach só percorre os elementos e deixa o resto do trabalho com você. */

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)  
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

/** Essa função recebe por parâmetro até três elementos, sendo que o primeiro  parâmetro corresponde ao atributo do array, 
 *  o sedundo parâmetro corrresponde ao índice do array, e o último parâmetro dentro da função forEach é o próprio array. */