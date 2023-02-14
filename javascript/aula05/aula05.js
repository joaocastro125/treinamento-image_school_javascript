// array sort fazer uma ordem 

let ordem =[9,8,7,6,5,4,3,2,1]


let result=ordem.sort()

console.log(result)


// for , forEach, for in , for of 
// while , do while 


for(let i=0; i<10; i++ ){
    console.log("numero "+i)
}
let tabuada=5
for(let i=0; i<10; i++ ){
    let messagem=`${tabuada} x ${i} = ${i*tabuada}`
    console.log(messagem)
}

// while 

let numero=1

while(numero<10){
    console.log(` numero :${numero}`)
    numero++
} 


// funcao 


function somar(a,b){
    return a+b
}

let resultado=somar(10,82)

console.log(resultado)

