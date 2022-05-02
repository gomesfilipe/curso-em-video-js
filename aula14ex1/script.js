var generate = document.getElementById('generate')
generate.addEventListener('click', generate_table)

function generate_table() {
    var number = Number(document.getElementById('number').value)
    var select = document.getElementById('table')

    select.innerHTML = ''
    for(var i = 1; i <= 10; i++) {
        var option = document.createElement('option')
        option.text = `${number} x ${i} = ${number * i}`
        select.appendChild(option)
    }
}