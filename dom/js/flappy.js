function novoElemento(tagName, className){
    const elem = document.createElement(tagName)
    elem.classList.add(className)
    return elem
}

function criaCano(ehTeto = false){
    this.elemento = novoElemento('div', 'cano')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(ehTeto ? corpo : borda)
    this.elemento.appendChild(ehTeto ? borda : corpo )

    this.setAltura = altura => corpo.style.height = `${altura}px`
}



function criaParDeCano(altura, abertura, x){
    this.elemento = novoElemento('div', 'par-canos')

    this.barreiraTeto = new criaCano(true)
    this.barreiraChao = new criaCano(false)

    this.elemento.appendChild(this.barreiraTeto.elemento)
    this.elemento.appendChild(this.barreiraChao.elemento)

    this.randomizarCanos = () => {
        const alturaTeto = Math.random() * (altura - abertura)
        const alturaChao = altura - abertura - alturaTeto
        this.barreiraTeto.setAltura(alturaTeto)
        this.barreiraChao.setAltura(alturaChao)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.randomizarCanos()
    this.setX(x)
}


function criaCanos(altura, largura, abertura, espaco, marcouPonto){
    this.pares = [
        new criaParDeCano(altura, abertura, largura),
        new criaParDeCano(altura, abertura, largura + espaco),
        new criaParDeCano(altura, abertura, largura + espaco * 2),
        new criaParDeCano(altura, abertura, largura + espaco * 3)
    ]
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par =>{
            par.setX(par.getX() - deslocamento)

            if(par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaco * this.pares.length)
                par.randomizarCanos()
            }

            const meio = largura/2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if(cruzouOMeio)
            {
                marcouPonto()
            } 
        })
    }
}

const forcaVoo = 8
const forcaGravidade = -5

function criaPassaro(alturaJogo){
    let estaVoando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => estaVoando = true
    window.onkeyup = e => estaVoando = false

    this.animar = () => {
        const alturaPassaro = this.getY() + (estaVoando ? forcaVoo : forcaGravidade)
        const alturaMax = alturaJogo - this.elemento.clientHeight

        if(alturaPassaro <= 0){
            this.setY(0)
        }else if(alturaPassaro >= alturaMax){
            this.setY(alturaMax)
        }else{
            this.setY(alturaPassaro)
        }
    }

    this.setY(alturaJogo/2)
}

function criaPontuacao(){
    this.elemento = novoElemento('span', 'pontuacao')
    this.atualizaPontuacao = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizaPontuacao(0)

}

function estaoColidindo(item1, item2){
    const primeiro = item1.getBoundingClientRect()
    const segundo = item2.getBoundingClientRect()

    const distanciaHorizontal = primeiro.left + primeiro.width >= segundo.left && segundo.left + segundo.width >= primeiro.left
    const distanciaVertical = primeiro.top + primeiro.height >= segundo.top && segundo.top + segundo.height >= primeiro.top

    return distanciaHorizontal && distanciaVertical
}

function passaroColidiu(passaro, canos){
    let colidiu = false
    canos.pares.forEach(parDeCanos => {
        if(!colidiu){
            const teto = parDeCanos.barreiraTeto.elemento
            const chao = parDeCanos.barreiraChao.elemento
            colidiu = estaoColidindo(passaro.elemento, teto) || estaoColidindo(passaro.elemento, chao)
        }
    })
    return colidiu
}

function iniciaJogo(){
    let pontos = 0

    const areaDoJogo = document.querySelector('[flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const pontuacao = new criaPontuacao()
    const canos = new criaCanos(altura, largura, 250, 400, () => pontuacao.atualizaPontuacao(++pontos))
    const passaro = new criaPassaro(altura)

    areaDoJogo.appendChild(pontuacao.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    canos.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.play = () =>{
        const temporizador = setInterval(() => {
            canos.animar()
            passaro.animar()

            if(passaroColidiu(passaro, canos)){
                clearInterval(temporizador)
            }
        },20)
    }
}

new iniciaJogo().play()




