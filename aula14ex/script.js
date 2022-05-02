var button = document.getElementById('count')
button.addEventListener('click', count)

function count() {
    var begin = Number(document.getElementById('begin').value)
    var end = Number(document.getElementById('end').value)
    var step = Number(document.getElementById('step').value)

    if(step <= 0 && end < begin) {
        alert('Invalid input!')
    }
    // alert(begin + ' ' + end + ' ' + step)
    var result = document.getElementById('result')
    result.innerText = ''
    for(var i = begin; i <= end; i += step) {
        result.innerText += String(i)
        result.innerText += '/'
    }
}