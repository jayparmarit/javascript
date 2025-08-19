const numArry = [1,2,3,4,5,6,7,8,9,10];

let numGreterThan5 = numArry.find((values)=> values > 5)

console.log(numGreterThan5);

// <------------------------------------------>

let numGreterThan5index = numArry.findIndex((values)=> values > 5);

console.log(numGreterThan5index)


// <------------------------------------------>



const car = [
    "thar",
    "scorpio",
    "fortuner",
    "BMW",
    "mercedise",
    "lambergini",
    "rolls royals"
];

console.log(car.slice(3, 6));

// <------------------------------------------>


let num = [2, 3, 4, 78, 9, 6, 45, 64, 5, 5, 5];

console.log(num.some((values)=> values> 100));

// <------------------------------------------>

console.log(num.every((values) => values > 5));
