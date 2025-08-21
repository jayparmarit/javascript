// Classes in JavaScript are a blueprint for creating objects, introduced in ES6.
// They encapsulate data and behavior by defining properties and methods,
// enabling object-oriented programming. Classes simplify the creation of objects
// and inheritance, making code more organized and reusable.

// JavaScript classes are templates for JavaScript objects.
// A JavaScript class is not an object; it is a template for creating objects.


class car{
    constructor (brand, model){
        this.brand = brand
        this.model = model;
    }
}

let carOne = new car ("BMW", "MS");

console.log(carOne);

console.log(typeof carOne);

let carTwo = new car ("mercedes", "G-wagon");

console.log(carTwo);