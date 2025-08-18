//  Iterating Through Array Elements

const name = [
  "meet",
  "kartik",
  "kunal",
  "amit",
  "vishal",
  "akhil",
  "abhi",
];

//   using for loop

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// <-------------------------------------------->

// using for each

name.forEach((name) => {
  console.log("name using for Each OP", name);
});



// <-------------------------------------------->



// this for each function will execute for each time for the all element of an array

// Array Concatenation

// concatenation means joining two item into one

let car = ["thar", "scorpio", "fortuner", "BMW"];

let showItems = name.concat(car);

console.log("all available show items :", showItems);


// <-------------------------------------------->



// Conversion of an Array to String

console.log("converting an Array to String", name.toString());