// Parâmetros e retorno são opcionais em JS
const retornoOpcional = (largura, altura) => {
    const area = largura * altura
    if(area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(retornoOpcional(5, 5))