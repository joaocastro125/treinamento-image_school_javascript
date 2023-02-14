// loja de promoção:pegar um valor em reais e vamos dar um desconto 
// se gasta 1000 -> 5% 
// se gasta 5500 -> 14% 
// se gasta 23000 -> 21% 


const valorGasto=20000
let valorComDesconto=valorGasto



if(valorGasto>=1000 && valorGasto<5500){
    // desconto 5%
    valorComDesconto=valorGasto-((valorGasto*5)/100)

}

if(valorGasto>=5500 && valorGasto<23000){
    // desconto 14%
    valorComDesconto=valorGasto-((valorGasto*14)/100)

}

if(valorGasto>=23000){
    // desconto 21%
    valorComDesconto=valorGasto-((valorGasto*21)/100)

}
console.log("valor com desconto",valorComDesconto)


// string , number , boolean , arrays , object , function 

// let Name="joao"
// let email="joao@exemple.com"
// let admin=false

// let name2="marcos"
// let email2="marcos@exemple.com"


// let name3="lucas"
// let email3="lucas@exemple.com"
// if(Name=='joao'){
//     admin=admin
// }
// console.log("minhas frases",Name,name2,name3,admin)


// objeto
const pessoa1={
    name:"joao",
    email:"joao@exemple.com",
    admin:false

}

const pessoa2={
    name:"joao",
    email:"joao@exemple.com",
    admin:false

}

const pessoa3={
    name:"joao",
    email:"joao@exemple.com",
    admin:false
}


console.log(pessoa1.name)


// array 

let  vogais=['a','e','i','o',]
let procurandoLetra='a'

// adcione no final do array 
vogais.push(1000)
// vendo a primeira posição
console.log(vogais[0])


console.log(vogais)

// fazendo uma busca no array 
let resultado=vogais.find(vogais=>vogais===procurandoLetra)
if(resultado){
    console.log("encontrei a vogal ")
}else{
    console.log("encontrei a consoante")
}

console.log(resultado)


let numero=[1,2,3,4,5,6]

// faz uma filtragem 
let result=numero.filter(numerico=>numerico>2)

console.log(result)