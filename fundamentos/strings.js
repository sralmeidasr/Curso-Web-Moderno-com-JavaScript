const escola = 'Cod3r'

console.log(escola.charAt(4)) // Vai trazer a letra na posição pedida em charAt(), sendo que primeira letra da string sempre vai ser zero.
console.log(escola.charAt(5)) // Se o índice for maior do que a string, ele retorna um valor vazio dizendo que não encontrou nada. 
console.log(escola.charCodeAt(3)) // imprimi o valor da letra no teclado apartir do índice informado, sendo que primeira letra da string sempre vai ser zero.
console.log(escola.indexOf('3')) // Quando se tem o digito, e é preciso saber qual é o índice desse digito dentro da palavra. 

console.log(escola.substring(1)) // Vai mostrar as letras da strings apartir do número informado no índice.
console.log(escola.substring(0, 3)) // vai do índice 0 até o 3 mas sem mostrar o íncide 3.

console.log('Escola '.concat(escola).concat("!")) // Essa é uma maneira da fazer concatenação, que é somar uma string em outra.
console.log('Escola ' + escola + "!") // Maneira mais comum de concatenar, que vai somar uma string em outra.

console.log(escola.replace(3, 'e')) // Nessa caso eu peguei a constante Cod3r e usei a função replace para substituir o 3 pelo 'e'.
console.log('Ana,Maria,Pedro'.split(',')) // Essa função pega a string e transforma ela em um arry, pegando como separador o que foi informado dentro do índice .split().