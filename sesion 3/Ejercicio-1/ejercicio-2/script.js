//función simple sin retorno// 

function mensaje(){
    console.log('hola')
} 

mensaje();

//función simple con retorno//

function calcular(numero1,numero2,numero3){
    let promedio = (numero1 + numero2 + numero3)/3
    return `El promedio es ${promedio}`
}
let prom = calcular(5,4,3)
console.log(prom) 

//función anónima//

const suma = function(numero1, numero2){ 
    let suma = numero1 + numero2   
    return suma 
}
console.log(`La suma es ${suma(1,2)}`)

//funcion flecha arrow function//

const resta = (numero1,numero2) => {
    let resta = numero1 - numero2
    return resta 
} 
console.log(`La resta es ${resta(2,2)}`)







