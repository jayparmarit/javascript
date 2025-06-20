let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")

let sp = ["&","@","*","^","%","#","$"]

form,addEventListener("submit", function(e){
    e.preventDefault();
    if(password.value.length < 8)
    {
        alert("password length must have minimum 8 letters")
    }
    else if(!sp.some((n) => password.value.includes(n)))
    {
        alert("must have special characters")
    }
    else if(!password.value.split("").some((n) => n.toUpperCase() == n && n != n.toLowerCase())){
        alert("must have atleast one capital letters")
    }
    else{
        console.log(email.value)
        console.log(password.value)
    }
})