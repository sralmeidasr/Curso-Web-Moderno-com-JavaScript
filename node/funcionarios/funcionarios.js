/* existe uma extensão no google chrome chamada "Json viewer" que ajuda a visualizar melhor documentos json. */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})

/* Desafio -> mulher chinesa com o menor salário */