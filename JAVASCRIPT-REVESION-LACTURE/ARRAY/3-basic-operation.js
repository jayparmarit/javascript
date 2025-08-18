// adding element to an array

// adding element to an array in last


const car = ["scorpio", "audi", "thar", "marcedise", "lambergini"]

console.log(car.length, car)

// <------------------!--------------->

car.push("rolls royals")
console.log(car.length, car)


// <------------------!--------------->

car.unshift("volvo")
console.log(car.length, car)


// <------------------!--------------->

car.pop()
console.log(car.length, car)


// <------------------!--------------->

car.shift()
console.log(car.length, car)

// <------------------!--------------->

car.splice(2, 0, "swift", "fortuner")
console.log(car.length, car)

// <------------------!--------------->
car.splice(4, 2)
console.log(car.length, car)

// <------------------!--------------->

