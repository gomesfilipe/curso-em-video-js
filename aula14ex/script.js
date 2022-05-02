var button = document.getElementById('count')
button.addEventListener('click', count)

function count() {
    var begin = Number(document.getElementById('begin').value)
    var end = Number(document.getElementById('end').value)
    var step = Number(document.getElementById('step').value)

    if(step <= 0) {
        alert('Invalid input!')
    }

    var result = document.getElementById('result')
    result.innerHTML = ''

    if(begin <= end) {
        for(var i = begin; i <= end; i += step) {
            result.innerHTML += `${String(i)} \u{1F449} `
        }
    } else {
        for(var i = begin; i >= end; i -= step) {
            result.innerHTML += `${String(i)} \u{1F449} `
        }
    }
    result.innerHTML += `\u{1F3C1}`
}
