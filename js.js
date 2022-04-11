
let par = document.getElementById('par')
const myBtn = document.getElementById("myBtn")
let input = document.querySelector('#input')

let now = new Date()
let values

myBtn.addEventListener("click", calculateAge)

function calculateAge(){
    let valueSplitted = input.value.split('-')


    values = {
        year: now.getFullYear() - valueSplitted[0],
        month: now.getMonth() - valueSplitted[1],
        day: now.getDate() - valueSplitted[2]
    }
    console.log(now)
    if(values.month < 0){
        values.month +=  13
        values.year -= 1
    }
    if(values.day < 0){
        values.day +=  30
        values.month -= 1
    }



    par.innerHTML = "you are " 
    + values.year
    + " years old and " + values.month
    + " months and " + values.day + " days old."
}

window.addEventListener('keypress',e=>{
    if(e.key === "Enter"){
        calculateAge()
    }
})