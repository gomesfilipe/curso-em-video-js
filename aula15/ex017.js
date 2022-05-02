var numbers = [1, 3, 6, -1, -4]

console.log(numbers)
console.log('length: ' + numbers.length)

numbers.sort()
console.log('after sorting: [' + numbers + ']\n')

numbers.push(8)
console.log('after add 8: [' + numbers + ']')
console.log('new length: ' + numbers.length)

console.log('index of element 6: ' + numbers.indexOf(6))
console.log('index of element 10: ' + numbers.indexOf(10))
