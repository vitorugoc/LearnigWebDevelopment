const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


//Retornar um array apenas com os preços

const transformaJSON = e => JSON.parse(e)
const pegaNumber = e => e.preco.toFixed(2)
let precos = carrinho.map2(transformaJSON).map2(pegaNumber)

console.log(precos)