let tbody = document.querySelector("#tbody")
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let form = document.querySelector("#form")
let total = document.querySelector("#total")
let userID = document.querySelector("#ID")
let submitbtn = document.querySelector("#submitbtn")

let alldata = []

console.log(tbody)

form.onsubmit = function(e){
    e.preventDefault()

    if(userID.value){

        alldata = alldata.map((ele)=>{
            if(ele.id == userID.value){
                ele.first_name = name.value
                ele.email = email.value
                ele.phone = phone.value
            }
            return ele;
        })

        showdata(alldata)

    } else{

          let obj = {
        id: alldata.length+1,
        first_name:name.value,
        email:email.value,
        phone:phone.value,
    }
    alldata.push(obj);
    showdata(alldata)

    }

  

    userID.value="",
    name.value="",
    email.value="",
    phone.value="",

    submitbtn.innerText="submit"
    submitbtn.className = "btn btn-success"
}



function showdata(newdata){
    tbody.innerHTML = "";
    newdata.map(function(ele){
        let newTr = `<tr>
                        <td>${ele.id}</td>
                        <td>${ele.first_name}</td>
                        <td>${ele.email}</td>
                        <td>${ele.phone}</td>
                        <td>
                            <button onclick="deletedata(${ele.id})" class="btn btn-danger btn-sm">🗑️</button>
                            <button onclick="editdata(${ele.id})" class="btn btn-warning btn-sm">✏️</button>
                        </td>
                     </tr>`
        tbody.innerHTML += newTr;
    })

    total.innerText = newdata.length
}

showdata(alldata)