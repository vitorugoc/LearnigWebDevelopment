const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota:9.2, bolsita: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota:8.7, bolsista:true}
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
let resultado = alunos.map(e => e.bolsista).reduce(todosBolsistas)
console.log(resultado)


//Desafio 2: Algum aluno é bolsista?

const algumBolsitas = (resultado, bolsista) => resultado || bolsista
let resultado2 = alunos.map(e => e.bolsista).reduce(algumBolsitas)
console.log(resultado2)