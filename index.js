// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da média.
const alunos = [
    {
        nome: "Matheus",
        nota: 9.8
    },
    {
        nome: "George",
        nota: 10
    },
    {
        nome: "Rosana",
        nota: 2
    }
]



const media = (alunos[0].nota + alunos[1].nota + alunos[3].nota) / 3

if (media > 5) {
    console.log(`A nota foi de ${media}. Parabéns!`)
} else {
    console.log('A média foi menor que 5, estude mais !')
}
