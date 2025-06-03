
let n =20;

n = "A"

console.log(n)

// number;

// string;

// boolean;

// null

// undefine;


// array

// object;

let num;

console.log(num)

let arr = [1, 2 , 3, 4, 5] 


console.log(arr)

let data = ["yash", 123, true, 85.6]

data.push("red")

data.push(arr)

console.log(data)


let obj = new Object;


obj.name = "yash"
obj.no = 8788766

console.log(obj)


let prod = {
    title: "amit milk",
    price:20,
    rate: 4.8
}


let prod1 = {
    title: "amit curd",
    price:40,
    rate: 4.5
}

let prod2 = {
    title: "amul buttle milk",
    price:15,
    rate: 4.2
}

console.log(prod)

data.push(prod, prod1, prod2)

console.log(data)

let t = data[6]

console.log(t)

data[7].title = "amul curd"


for(let i = 6; i<data.length; i++)
{
    let t = data[i]
    document.write("<h4>Title: " + t.title + "</h4>")
    document.write("<h4>price: " + t.price + "</h4>")
    document.write("<h4>rate: " + t.rate + "</h4><hr/>")
}



let first = {
    value : "first"
}


let second = first;

second.value = "second"

console.log(first.value)
console.log(second.value)



// int *obj = new Object();
// obj->value = "20"

// int *obj2 = obj;

// obj2->value = "30"
