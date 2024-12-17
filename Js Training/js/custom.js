// const screen = document.getElementById('demo')
// let x = 4
// x = 5
// screen.innerHTML = x
// screen.style.fontSize = '30px'

const input = document.querySelector('#input')
let x;
function setValue(x) {
    input.value = x
}

function readInput() {
    x = +input.value;
}

function increase(step) {
    readInput()
    x += step
    setValue(x)
}

function decrease(step) {
    readInput()
    if (x>1) {
       x -= step
    setValue(x) 
    } else {
        console.log('Not Allowed');
        
    }
    
}