//CALCULO IMC//

const nome = "Matheus"
const peso = 80
const altura = 1.78
const sexo = "Masculino "

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(nome, "Você está acima do peso;") 
} else {
    console.log(nome, "Você NÃO está acima do peso;")
}