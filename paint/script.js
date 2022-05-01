var colors = [...document.getElementsByClassName('color')]
var board = document.getElementById('blackboard')

// for(var i = 0; i < colors.length; i++){
//     colors[i].onclick = get_color
//     colors[i].onmouseenter = mouse_in
//     colors[i].onmouseout = mouse_out
// }

colors.forEach(color => {
    color.onclick = get_color
    color.onmouseenter = mouse_in
    color.onmouseout = mouse_out
})

board.onclick = paint_board

function get_color(event) {
    var current = document.getElementById('current')
    current.style.background = window.getComputedStyle(event.target).background
}

function paint_board() {
    var color = document.getElementById('current').style.background
    document.getElementById('blackboard').style.background = color
}

function mouse_in(event) {
    event.target.style.boxShadow = '5px 5px 5px white'
}

function mouse_out(event) {
    event.target.style.boxShadow = ''
}
