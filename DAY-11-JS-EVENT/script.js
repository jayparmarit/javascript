// function message(){
//     window.alert("login successful..!!")

//     window.location.href="https://www.amazon.in"
// }

// let pop = document.querySelector("#pop");
// let input = document.querySelector("#input");

// pop.addEventListener("mouseleave",function(){
//     window.alert("hellow everyone")
// })



let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let passkey = document.querySelector("#passkey")


submit.addEventListener("click", function(){
    if(email.value != "jay@gmail.com" && password.value != "jay123")
    {
        window.alert("⚠️wrong creaditional..!")
        email.classList += " border border-danger"
        password.classList += " border border-danger"
    }
    else if (email.value != "jay@gmail.com"){
        window.alert("📧wrong email")
        email.classList += " border border-danger"
    }
    else if (password.value != "jay123"){
          window.alert("🔑wrong password")
        password.classList += " border border-danger"
    }
    else{
        window.alert("✅login successfull..!!")
        window.location.href="https://github.com/jayparmarit"
    }
})


passkey.onclick = function(){
    if(password.type=="password"){
        password.type="text"
        passkey.children[0].classname = "bi bi-eye-slash"
    }
    else{
        password.type="password"
        passkey.children[0].classname = "bi bi-eye"
    }
}