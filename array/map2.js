const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const transformaJSON = e => JSON.parse(e)
const pegaNumber = e => e.preco.toFixed(2)
let precos = carrinho.map(transformaJSON).map(pegaNumber)

console.log(precos)