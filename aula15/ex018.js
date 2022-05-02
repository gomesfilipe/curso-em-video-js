var numbers = [1, 3, 6, -1, -4]

console.log('normal for')
for(var i = 0; i < numbers.length; i++) {
    console.log('element: ' + numbers[i])
}

console.log('\nexpert for')
for(var i in numbers) {
    console.log('element: ' + numbers[i])
}
