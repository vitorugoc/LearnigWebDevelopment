const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function leArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) =>{  return resolve(conteudo.toString())})
        console.log('Depois de ler')
    })
    
}

leArquivo(caminho).then(console.log)