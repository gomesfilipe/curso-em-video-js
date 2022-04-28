jogo_da_velha()

function jogo_da_velha() {
    var a0 = window.document.getElementsByClassName('casa')[0]
    var a1 = window.document.getElementsByClassName('casa')[1]
    var a2 = window.document.getElementsByClassName('casa')[2]

    var b0 = window.document.getElementsByClassName('casa')[3]
    var b1 = window.document.getElementsByClassName('casa')[4]
    var b2 = window.document.getElementsByClassName('casa')[5]

    var c0 = window.document.getElementsByClassName('casa')[6]
    var c1 = window.document.getElementsByClassName('casa')[7]
    var c2 = window.document.getElementsByClassName('casa')[8]

    a0.textContent = ''
    a1.textContent = ''
    a2.textContent = ''

    b0.textContent = ''
    b1.textContent = ''
    b2.textContent = ''

    c0.textContent = ''
    c1.textContent = ''
    c2.textContent = ''

    a0.addEventListener('click', escreve_casa_a0)
    a1.addEventListener('click', escreve_casa_a1)
    a2.addEventListener('click', escreve_casa_a2)

    b0.addEventListener('click', escreve_casa_b0)
    b1.addEventListener('click', escreve_casa_b1)
    b2.addEventListener('click', escreve_casa_b2)
    
    c0.addEventListener('click', escreve_casa_c0)
    c1.addEventListener('click', escreve_casa_c1)
    c2.addEventListener('click', escreve_casa_c2)
}

function escreve_casa_a0() {
    var casa = window.document.getElementById('a0')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_a0)

    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_a1() {
    var casa = window.document.getElementById('a1')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_a1)

    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_a2() {
    var casa = window.document.getElementById('a2')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_a2)

    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_b0() {
    var casa = window.document.getElementById('b0')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_b0)
    
    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_b1() {
    var casa = window.document.getElementById('b1')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_b1)

    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_b2() {
    var casa = window.document.getElementById('b2')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_b2)

    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_c0() {
    var casa = window.document.getElementById('c0')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_c0)

    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_c1() {
    var casa = window.document.getElementById('c1')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_c1)

    if(acabou_partida()) 
        encerrar_partida()
}

function escreve_casa_c2() {
    var casa = window.document.getElementById('c2')
    var char = window.document.getElementById('char')
    casa.innerHTML = char.textContent

    if(char.textContent == 'X') {
        char.textContent = 'O'
    } else {
        char.textContent = 'X'
    }

    casa.removeEventListener('click', escreve_casa_c2)

    if(acabou_partida()) 
        encerrar_partida()
}

function iguais(a, b, c) {
    return a === b && b === c 
}

function acabou_partida() {
    var a0 = window.document.getElementsByClassName('casa')[0]
    var a1 = window.document.getElementsByClassName('casa')[1]
    var a2 = window.document.getElementsByClassName('casa')[2]

    var b0 = window.document.getElementsByClassName('casa')[3]
    var b1 = window.document.getElementsByClassName('casa')[4]
    var b2 = window.document.getElementsByClassName('casa')[5]

    var c0 = window.document.getElementsByClassName('casa')[6]
    var c1 = window.document.getElementsByClassName('casa')[7]
    var c2 = window.document.getElementsByClassName('casa')[8]
    
    // Vitória por linha
    if(iguais(a0.textContent, a1.textContent, a2.textContent) && a0.textContent != '') return true
    if(iguais(b0.textContent, b1.textContent, b2.textContent) && b0.textContent != '') return true
    if(iguais(c0.textContent, c1.textContent, c2.textContent) && c0.textContent != '') return true

    // Vitória por coluna
    if(iguais(a0.textContent, b0.textContent, c0.textContent) && a0.textContent != '') return true
    if(iguais(a1.textContent, b1.textContent, c1.textContent) && a1.textContent != '') return true
    if(iguais(a2.textContent, b2.textContent, c2.textContent) && a2.textContent != '') return true

    // Vitória por diagonal
    if(iguais(a0.textContent, b1.textContent, c2.textContent) && a0.textContent != '') return true
    if(iguais(c0.textContent, b1.textContent, a2.textContent) && c0.textContent != '') return true

    return false
}

function encerrar_partida() {
    var a0 = window.document.getElementsByClassName('casa')[0]
    var a1 = window.document.getElementsByClassName('casa')[1]
    var a2 = window.document.getElementsByClassName('casa')[2]

    var b0 = window.document.getElementsByClassName('casa')[3]
    var b1 = window.document.getElementsByClassName('casa')[4]
    var b2 = window.document.getElementsByClassName('casa')[5]

    var c0 = window.document.getElementsByClassName('casa')[6]
    var c1 = window.document.getElementsByClassName('casa')[7]
    var c2 = window.document.getElementsByClassName('casa')[8]

    a0.removeEventListener('click', escreve_casa_a0)
    a1.removeEventListener('click', escreve_casa_a1)
    a2.removeEventListener('click', escreve_casa_a2)

    b0.removeEventListener('click', escreve_casa_b0)
    b1.removeEventListener('click', escreve_casa_b1)
    b2.removeEventListener('click', escreve_casa_b2)

    c0.removeEventListener('click', escreve_casa_c0)
    c1.removeEventListener('click', escreve_casa_c1)
    c2.removeEventListener('click', escreve_casa_c2)

    var vez = window.document.getElementById('vez')
    var winner = window.document.getElementById('winner')

    if(vez.textContent == 'X') { // resolver
        winner.textContent = 'WINNER: O'

    } else {
        winner.textContent = 'WINNER: X'
    }
}