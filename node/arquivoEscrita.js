const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile('./node/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || "Arquivo salvo!") 
})