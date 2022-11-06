let imc
let peso
let altura

console.log("Vamos calcular seu IMC?")

peso = prompt("Qual o seu peso, em Kg?")
altura = prompt("Qual a sua altura, em metros?")

imc = (peso/(altura*altura)).toFixed(1)

console.log(`Seu IMC é ${imc} !`)