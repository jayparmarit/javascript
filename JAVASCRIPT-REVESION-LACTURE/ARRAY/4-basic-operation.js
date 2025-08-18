// calculating array length

const name = [
  "meet",
  "kartik",
  "kunal",
  "amit",
  "vishal",
  "akhil",
  "abhi",
];

console.log("name length: ", name.length);

// <--------------------------------------------->

// Increase and Decrease the Array Length

console.log("name element and their length before: ", name.length, name);


// <--------------------------------------------->


// increase length

name.length = 10;

console.log(
  "name element and its length after increasing: ",
  name.length,
  name
);

// <--------------------------------------------->


// decrease length

name.length = 4;

console.log(
  "name element and its length after decreeing: ",
  name.length,
  name
);