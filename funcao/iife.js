/* IIFE - Immediatly Invoked Function Expression = 'funções auto-invocadas'. */

(function() {    
    console.log('Será executando na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

/* 
Existe um segredinho no uso de mais de uma função auto-invocada, caso você tente executar uma função auto-invocada após a outra,
é possível sim, mas sempre é importante que a última sentença de código antes de uma IIFE seja finalizada com ponto e vírgula.

    (function dizOla(){
        console.log("Ola!")
    })();
     
    (function dizNome(nome){
        console.log(`Me chamo ${nome}.`)
    })("João")
     
    //saída esperada:
    // Ola!
    // Me chamo João.

*/

/**
 A função auto-invocada poderia ser escrita também como arrow function:
  
    ()=> {
        // code goes here...
    }()

 */