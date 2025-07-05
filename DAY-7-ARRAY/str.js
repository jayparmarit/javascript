// let str = "red and white skill education"

// let newstr = str.replace("and", "&")
// let newstr = str.replaceAll(" ", "---")
// console.log(newstr)

// let newstr = str.tolocaleUpperCase()

// for(let s of str){
//     console.log(s)
// }
// console.log(newstr)

let obj ={
  "id": 1,
  "first_name": "Ansley",
  "last_name": "Bernholt",
  "email": "abernholt0@linkedin.com",
  "gender": "Female",
  "phone": "716-648-0918",
  "Car": "Buick",
  "counrtry": "Malaysia"
}

for(let key in obj){
    console.log(key + " : " + obj[key])
}