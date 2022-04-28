var now = new Date()
var hour = now.getHours()

if(hour < 0 || hour >= 24) {
    console.log('Invalid hour.')

} else {
    if(hour < 12) {
        console.log(`Now is ${hour} a.m!`)
    } else {
        console.log(`Now is ${hour} p.m!`)
    }
   
   
    if(morning(hour)) {
        console.log('Good morning!')
    } else if(afternoon(hour)) {
        console.log('Good afternoon!')
    } else if(evening(hour)) {
        console.log('Good evening!')
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
