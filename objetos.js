//formas de criar objetos
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silva'
}

console.log( pessoa[ 'sobrenome' ] ) 

// 2 - forma de criar objetos
const funcionarios = new Object();
funcionarios.nome = "Karen"
funcionarios.sobrenome = "Joana"

console.log(funcionarios.nome)

// 3- forma de criar objetos
function criarPessoa(nome,sobrenome){
    return { nome, sobrenome}
}
const p1 = criarPessoa("Arthur","Silva")

const p2 = criarPessoa("João","Silva")

console.log(p1.nome)
console.log(p2)


