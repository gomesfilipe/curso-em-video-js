var age = 15

if(age < 16) {
    console.log('You can\'t vote')
} else if(16 <= age && age < 18 || age > 65) {
    console.log('Opcional vote.')
} else {
    console.log('You must vote.')
}
