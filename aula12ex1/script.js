function check() {
    var birth = Number(window.document.getElementById('txtano').value)
    var result = window.document.getElementById('res')
    
    if(valid_year(birth)) {
        var gender = window.document.getElementsByName('radsex')
        var Age = age(birth)
        var img = window.document.createElement('img')
        img.setAttribute('id', 'photo')
        var path

        if(gender[0].checked) { // Man
            result.innerHTML = `You are a ${Age} years old man!`
            if(kid(Age)) path = 'img/kid-m.jpg' 
            else if(teen(Age)) path = 'img/teen-m.jpg' 
            else if(adult(Age)) path = 'img/adult-m.jpg' 
            else if(old(Age)) path = 'img/old-m.jpg'
        } else { // Woman
            result.innerHTML = `You are a ${Age} years old woman!`
            if(kid(Age)) path = 'img/kid-f.jpg' 
            else if(teen(Age)) path = 'img/teen-f.jpg' 
            else if(adult(Age)) path = 'img/adult-f.jpg' 
            else if(old(Age)) path = 'img/old-f.jpg'
        }
    } else {
        window.alert('Invalid year!')
    }

    result.style.textAlign = 'center'
    img.setAttribute('src', path)
    result.appendChild(img)
    img.style.borderRadius = '10px'
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

function valid_year(year) {
    return year <= new Date().getFullYear() && year > 0
}

function age(birth) {
    if(valid_year(birth)) {
        return new Date().getFullYear() - birth;
    }
    return -1
}
