var add = document.getElementById('add')
add.addEventListener('click', insert_number)

var analysis = document.getElementById('analysis')
analysis.addEventListener('click', analysis_numbers)

var reset = document.getElementById('reset')
reset.addEventListener('click', reset_numbers)

function insert_number() {
    var input = document.getElementById('number')
    var number = Number(input.value)
    var options = document.getElementsByTagName('option')

    input.value = '' // Cleaning the input.
    input.focus() // Focus in the input, it isn't necessary click to type a new number.

    for(var i = 0; i < options.length; i++) {
        if(Number(options[i].value) == number) {
            alert(`Don't repeat numbers!`)
            return
        }
    }

    if(between(number, 1, 100)) {
        var select = document.getElementById('select')
        var option = document.createElement('option')

        option.text = `Number ${number} added.`
        option.value = number
        select.appendChild(option)
        select.size++
    } else {
        window.alert('Invalid number!')
    }
}

function analysis_numbers() {
    var options = document.getElementsByTagName('option')
    
    if(options.length == 0) {
        window.alert('Type the numbers!')
        return
    }
    
    var array = []

    for(var i = 0; i < options.length; i++) {
        array.push(Number(options[i].value))
    }
    
    var result = document.getElementById('result')
    result.innerHTML = ''

    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')
    var p4 = document.createElement('p')
    var p5 = document.createElement('p')

    p1.innerHTML = `Total numbers: ${array.length}`
    p2.innerHTML = `Greatest value: ${greatest(array)}`
    p3.innerHTML = `Smallest value: ${smallest(array)}`
    p4.innerHTML = `Sum of all numbers: ${sum_all(array)}`
    p5.innerHTML = `Average of all numbers: ${average(array)}`

    result.appendChild(p1)
    result.appendChild(p2)
    result.appendChild(p3)
    result.appendChild(p4)
    result.appendChild(p5)
}

function reset_numbers() {
    var select = document.getElementById('select')
    var input = document.getElementById('number')
    
    select.size = '0'
    select.innerHTML = ''
    input.value = '' // Cleaning the input.
    input.focus() // Focus in the input, it isn't necessary click to type a new number.
}

function between(a, b, c) {
    return b <= a && a <= c
}

function greatest(array) {
    array.sort()
    return array[array.length - 1]
}

function smallest(array) {
    array.sort()
    return array[0]
}

function sum_all(array) {
    var sum = 0
    for(var i in array) {
        sum += array[i]
    }
    return sum
}

function average(array) {
    return sum_all(array) / array.length
}
