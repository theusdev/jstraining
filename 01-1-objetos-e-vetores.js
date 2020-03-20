//Construção e impressão de objetos//

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala, 260 "
    }
}

console.log(`A empresa ${empresa.nome}, está localizada em ${empresa.endereço.rua} `);

//VETORES E OBJETOS//

const objeto =  [
        {nome: "Matheus", idade: "23 Anos", linguagem: "c++", especialidade: "Desktop"},
        {nome: "George", idade: "43 Anos", linguagem: "JavaScript", especialidade: "Web/Mobile"},
        {nome: "Rosana", idade: "45 Anos", linguagem: "Python", especialidade: "Data Science"}
    ]

console.log(`O Usuário ${objeto[0].nome} tem ${objeto[0].idade} e usa a tecnologia ${objeto[0].linguagem} 
com especialidade em ${objeto[0].especialidade}`);