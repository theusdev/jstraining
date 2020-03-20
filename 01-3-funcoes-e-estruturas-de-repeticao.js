// Usuários e tecnologias //


const usuarios = [
    { nome: "Matheus", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

// Busca por Tenologia//

function checaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS") return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O Usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}