//APOSENTADORIA//

const nome = "Luzia"
const sexo = "F"
const idade = 78
const contribuicao = 25

const aposentadoria = idade + contribuicao

const homemAposentar = sexo == 'M' && aposentadoria >= 95
const mulherAposentar = sexo == 'F' && aposentadoria >= 85

if (homemAposentar || mulherAposentar) {
   console.log(nome, "você pode se aposentar!")
} else {
    console.log(nome, "você ainda não pode se aposentar.")
}