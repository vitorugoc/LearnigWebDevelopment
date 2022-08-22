const produtos = [
    {nome : 'Notebook', preco: 2499, fragil: true},
    {nome: 'IPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

Array.prototype.filter2 = function(callback){
    let novoArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i]), i, this){
            novoArray.push(this[i])
        }
    }

    return novoArray
}


const produtosFrageis = (p) => p.fragil == true 
const produtosCaros = (p) => p.preco > 500


console.log("Aqui")
console.log(produtos.filter2(produtosFrageis))
console.log(produtos.filter2(produtosCaros))