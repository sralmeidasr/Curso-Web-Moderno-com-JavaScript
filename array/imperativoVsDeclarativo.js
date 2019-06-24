const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Método imperativo em ação
let media1 = 0
for (let i = 0; i < alunos.length; i++) {
    media1 += alunos[i].nota
}
console.log(media1 / alunos.length)

// Método declarativo em ação
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const media2 = alunos.map(getNota).reduce(soma)
console.log(media2 / alunos.length)

/* A abordagem 'imperativa' se preocupa detalhar exatemento como deve ser feita, ou seja, a Programação Imperativa se baseia 
em especificar os passos que um programa deve seguir para alcançar um estado desejado. 
 Exemplo:

    const numbers = [4,2,6,7]

    let total = 0

    for(let i = 0; i < numbers.length; i++){
        total += numbers[i]
    }

 Vantagens

    Eficiência
    Modelagem natural dos problemas do mundo real
    Consolidado e com dominância de mercado

 Desvantagens

    Foca no “COMO” e não o “QUE” precisa ser feito
    Difícil legilibilidade

Já a Programação declarativa é um paradigma de programação baseado em programação funcional, programação lógica ou programação 
restritiva. Um programa se diz declarativo quando descreve o que ele faz e não como seus procedimentos funcionam.
 Exemplo:

    const numbers = [4,2,6,7]

    numbers.reduce((previous, current) => {
      return previous + current
    })
 
 Vantagens

    Reduzir efeito colaterais
    Minimizar mutabilidade
    Mais legilibilidade e menos bugs

 Desvantagens

    Não oferece alocação explícita de memória ou declaração explícita de variáveis, necessários para a resolução de muitos 
    problemas reais.

    | Dica do dia: Nunca se prenda a somente um paradigma ou um conceito, 
    | existem várias outras formas de abordar o mesmo problema. 
    | [Nunca coloque um limite para si mesmo!]

    

*/