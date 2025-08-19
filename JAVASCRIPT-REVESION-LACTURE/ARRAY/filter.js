// JavaScript filter() Method
// This method is used to filter out the contents, as per the user-specified condition, in the form of a new array.

// Example: In this example, we will filter the even numbers from the array using the filter() method.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

// <------------------------------------->

const evenNumber = number.filter((number) => number % 2 === 0);

console.log("even number: ", evenNumber);

// <-------------------------------------------->

const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 45,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];


const peopleAge = personDetails.filter((x) => x.age > 40);

console.log(peopleAge);

// <---------------------------->

const peopleName = personDetails.filter((x) => x.age > 40).map((x) => x.name);

console.log(peopleName);

// <------------------------------------->

const peopleAgeNumber = personDetails.filter((x) => x.age > 40);

console.log(peopleAge);

// <-------------------------------------------->

const personNameGreaterThan40 = peopleAgeNumber.map((x) => x.name);

console.log(personNameGreaterThan40);