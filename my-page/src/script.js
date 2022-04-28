var conf = window.document.getElementsByTagName('button')[0]
var reset = window.document.getElementsByTagName('button')[1]
var show = window.document.getElementsByTagName('button')[2]

conf.addEventListener('click', exec_conf)
reset.addEventListener('click', exec_reset)
show.addEventListener('click', exec_show)

function exec_conf() {
    user = 'filipe'
    password = '123456789'

    var user_input = window.document.getElementById('user')
    var password_input = window.document.getElementById('password')

    if(user == user_input.value && password == password_input.value) {
        window.alert('You logged in the system!')
    
    } else {
        window.alert('Incorrect!')
    }
}

function exec_reset() {
    var user_input = window.document.getElementById('user')
    var password_input = window.document.getElementById('password')
    user_input.value = ''
    password_input.value = ''
}

function exec_show() {
    var password_input = window.document.getElementById('password')
    window.alert('Current password: ' + password_input.value)
}
