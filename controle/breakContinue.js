/**
 * É preciso saber algumas coisas sobre o 'break' e o 'continue'. Ambos só funcionan para os blocos de código do tipo 'for', 'while' e
 * 'switch', sendo que ambos, tanto 'break' quanto o 'continue' sempre quebram o saço mais proxómo dele, ou seja, se tivermos uma 
 * estrutura de um 'for' dentro de outro 'for', por exemplo, e o 'break' e o 'continue' estiverem dentro do 'for' interno, então
 * eles executam o comando apenas dentro desse 'for', sem afetar o de fora. Caso isso seja necessário, é possível criar um rótulo, com
 * com isso, ambos tanto o 'break' e o 'continue' seram executados nos varios 'fors' necessários.
 */

 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 for(x in nums){
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
 }

 for(y in nums) {
     if(y == 5) {
         continue
     }
     console.log(`${y} = ${nums[y]}`)
 }

 /**
  * Esse é o uso do 'rótulo' para quebrar dois 'fors, porém segundo o professor o uso de 'rótulo' não é indicado.
  */

  externo: for(a in nums){
      for(b in nums) {
          if(a == 2 && b == 3)
          break externo
          console.log(`Par = ${a},${b}`)
      }
  }