const produtos = [
    {nome : 'Notebook', preco: 2499, fragil: true},
    {nome: 'IPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2500
}))

const produtosFrageis = (p) => p.fragil == true 
const produtosCaros = (p) => p.preco > 500


console.log("Aqui")
console.log(produtos.filter(produtosFrageis))
console.log(produtos.filter(produtosCaros))