const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

Array.min = function(array){
    return Math.min.apply(Math, array)
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const mapeiaChines = funcionario => funcionario.pais == 'China'
    const mulheresChinesas = funcionarios.filter(mapeiaChines).filter(e => e.genero == 'F').reduce((menorSal, salAtual) => menorSal.salario < salAtual.salario ? menorSal : salAtual 
    )

    console.log(mulheresChinesas)
    
    
})

