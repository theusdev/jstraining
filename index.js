
const alunosDaTurmaA = [
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
    },
    {
        nome: "Mais um aluno",
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Robson",
        nota: 10
    },
    {
        nome: "Isabelle",
        nota: 2
    },
    {
        nome: "Novo Aluno",
        nota: 10
    }
]

function calculaMedia(alunos) {
    let soma = 0;

    for (let i = 0;  i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    
    const media = soma / alunos.length

    return media
}


function enviaMensagem(media, turma) {
    
    if (media > 5) {
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5, estude mais !`)
    }
}

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;

    if (aluno.nota < 5) {
            aluno.reprovado = true
    }
}

function enviarMensagemReprovado(aluno) {
    
    if(aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, "turmaA")
enviaMensagem(media2, "turmaB")


alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)