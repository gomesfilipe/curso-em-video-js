
function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('figure')
    var now = new Date()
    var hour = now.getHours()

    if(hour < 12) {
        msg.innerHTML = `It is ${hour} a.m.`

    } else {
        msg.innerHTML = `It is ${hour} p.m.`
    }

    if(morning(hour)) {
        img.src = 'img/morning.jpg'
        window.document.body.style.background = 'pink'
    } else if(afternoon(hour)) {
        img.src = 'img/afternoon.jpg'
        window.document.body.style.background = 'orange'
    } else if(evening(hour)) {
        img.src = 'img/evening.jpg'
        window.document.body.style.background = 'blue'
    }
}

function morning(hour) {
    return 0 <= hour && hour < 12
}

function afternoon(hour) {
    return 12 <= hour && hour < 19
}

function evening(hour) {
    return 19 <= hour && hour < 24
}
