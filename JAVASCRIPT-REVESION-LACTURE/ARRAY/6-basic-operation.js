// JavaScript Array join() Method

// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.

const car=[
    "thar",
    "scorpio",
    "fortuner",
    "mercedise",
    "BMW",
    "lambergini"
];

console.log(car.join("|||"))


// <-------------------------------------------->

const NumArry = [
    [1,2,3],
    [4,5,6],
    [7,8,9,10],
];

console.log(NumArry.flat());

// <-------------------------------------------->

const numberArry = [1,2,[3,4],[5,6,[7,8,9]]];

console.log(numberArry.flat(Infinity))

// <-------------------------------------------->


console.log("car elements", car);

console.log("slicing car array =>", car.slice(2, 5));