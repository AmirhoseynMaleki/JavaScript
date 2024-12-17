let studentList = ['Ali', 'Amir', 'Farnaz']
const input = document.querySelector('input')
const screen = document.getElementById('screen')
input.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        register()
    }
    console.log(event.keyCode);
})
let StringList = ''
StringList += studentList[0]+ '<br>'
StringList += studentList[1]+ '<br>'
StringList += studentList[2]+ '<br>'
screen.innerHTML = StringList
function register() {
    studentList.push(input.value)
    StringList += studentList[StringList.length-1]+'<br>'
    screen.innerHTML = StringList;
    console.log(studentList);
    input.value = ''
}