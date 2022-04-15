//greeting
//var is "hal" instead of "now" cuz I have declared "now" alreadt.This time I wrote hal which means now in persian/dari
let hal = new Date().getHours()

if (hal <= 12){
  document.write("Good Morning, I hope you have a good day")
} else if (hal > 13 || hal < 19 ){
  document.write("Good Afternoon, I hope you had a good day")
}else if (hal >= 19 || hal <= 22){
  document.write("Good night, I hope you had a good day")
}else{
  document.write("good night! sleep early, wake up early and ")
}
//greeting ends






let par = document.getElementById('par')
const myBtn = document.getElementById("myBtn")
let input = document.querySelector('#input')

let now = new Date()
let values

console.log(input.max)
input.max = `${now.getFullYear()}-0${now.getMonth()}-${now.getDate()}`
console.log(input.max)

myBtn.addEventListener("click", calculateAge)

function calculateAge(){
    let valueSplitted = input.value.split('-')


    values = {
        year: now.getFullYear() - valueSplitted[0],
        month: now.getMonth() - valueSplitted[1] + 1,
        day: now.getDate() - valueSplitted[2]
    }
    console.log(now)
    if(values.month < 0){
        values.month +=  12
        values.year -= 1
    }
    if(values.day < 0){
        values.day +=  30
        values.month - 1
    }



    par.innerHTML = "you are " 
    + values.year
    + " years and " + values.month
    + " months and " + values.day + " days old."
}

window.addEventListener('keypress',e=>{
    if(e.key === "Enter"){
        calculateAge()
    }
})




