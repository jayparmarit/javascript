// function rec(num, name){
//    console.log(name + " got " + num + " RS ")

//    return {
//         name: name,
//         rupees: num
//    }
// }


// let num = 200;
// let name = "yashvi"

// console.log(rec(num, name))



function rec(n){
    if ( n <= 1) {
        return
    }

    console.log(n)
    return n*rec(n-1)
}

console.log(rec(4))