for(let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for(let i in assuntosEcma){
    console.log(i)
}

for(let i of assuntosEcma){
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {aboradado: true}],
    ['Set', {aboradado: true}],
    ['Promisse', {aboradado: false}]
])

for(let i in assuntosMap){
    console.log(i)
}

for(let i of assuntosMap.values()){
    console.log(i)
}

for( let [ch, vh] of assuntosMap.entries()){
    console.log(ch, ':', vh)
}



