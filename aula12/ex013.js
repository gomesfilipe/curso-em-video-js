const sunday = 0
const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6

var now = new Date()
var week_day = now.getDay()

switch(week_day) {
    case sunday: console.log('Today is sunday!'); break
    case monday: console.log('Today is monday!'); break
    case tuesday: console.log('Today is tuesday!'); break
    case wednesday: console.log('Today is wednesday!'); break
    case thursday: console.log('Today is thursday!'); break
    case friday: console.log('Today is friday!'); break
    case saturday: console.log('Today is saturday!'); break
    default: console.log('Invalid day!'); break
}
