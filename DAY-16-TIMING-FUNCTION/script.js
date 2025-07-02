let hour = document.querySelector(".hour")
let minute = document.querySelector(".minutes")
let second = document.querySelector(".second")




setInterval(function(){
    let d = new Date();
    hour.textContent = d.getHours()
    minute.textContent = d.getMinutes()
    second.textContent = d.getSeconds()

}, 1000)

setInterval(function(){
    minute.classList += " minuteAnim";

}, 60000)



let timenumber = document.querySelector(".timenumber")
let aud = document.querySelector("#aud")
let clock = document.querySelector("#clock")

function startTimer(){
     setTimeout(function(){
            aud.play();
            clock.classList += " shake"

     }, timenumber.value*1000)
}