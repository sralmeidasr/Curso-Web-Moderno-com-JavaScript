/** Novo recurso do ES2015
 *  Destructuring serve para retirar um atributo de uma estrutura.
 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// retira de dentro do objeto 'pessoa' os parâmetros 'nome' e 'idade' pedidos
const { nome, idade } = pessoa
console.log(nome, idade)

// retira de dentro do objeto 'pessoa' os parâmetros 'nome' e 'idade' pedidos e ainda cria as variáveis 'n' e 'i'
const { nome: n, idade: i } = pessoa
console.log(n, i)

// caso seja pedido um parâmetro que não existe dentro do objeto, e ainda para o segundo atributo foi lhe atribuido um valor
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) 

// para acessar os atributos dentro de outro atributo dentro do objeto
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)