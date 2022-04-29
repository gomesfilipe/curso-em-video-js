function load() {
    return 0
}

function male(char) {
    return char == 'Male'
}

function female(char) {
    return char == 'Female'
}

function kid(age) {
    return 0 <= age && age <= 11
}

function teen(age) {
    return 12 <= age && age <= 20
}

function adult(age) {
    return 21 <= age && age <= 59
}

function old(age) {
    return age >= 60
}