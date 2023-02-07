// criar um calculo do imc 


let altura=1.80

let peso=84

// let resultadoTotal=(peso/(altura*altura)).toFixed(2)
// metodo de arredodamento javascript
let resultadoTotal=peso/(altura*altura)

//O método Math.trunc() retorna a parte inteira de um número, descartando suas casas decimais.
console.log(Math.trunc(resultadoTotal))
// fazendo um arredodamento para cima
console.log(Math.ceil(resultadoTotal))
// fazendo um arredodamento para baixo
console.log(Math.floor(resultadoTotal))
// A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
console.log(Math.round(34.4))




