function par_or_impar(number) {
    return number % 2 == 0 ? 'par' : 'impar'
}

function sum(a=0, b=0) { // Default values, if one of them don't given.
    return a + b
}

var func = function(x) { // Function in a variable.
    return x + 10
}

function fat(number) {
    if(number == 1 || number == 0) return 1
    return number * fat(number - 1)
}

console.log('is 5 par or impar? [' + par_or_impar(5) + ']')
console.log('is 2 par or impar? [' + par_or_impar(2) + ']')

console.log(sum(2, 3))
console.log(sum(2))

console.log(func(10))

console.log(fat(6))
