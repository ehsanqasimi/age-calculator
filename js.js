
now = new Date().getFullYear()
const myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", hello)
let input = document.querySelector('#input')

let par = document.getElementById('par')


function hello(){
    par.innerText = " you are " + parseFloat( now - input.value ) + " years old"
}

