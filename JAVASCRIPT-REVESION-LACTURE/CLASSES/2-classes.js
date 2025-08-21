const person = {
    name: "john",
    surname:"doe",
};

console.log(person)

person.age = 20

console.log(person)


class car {
    constructor(brand, name){
        this.brand = brand;
        this.name = name;
    }
}

const carOne = new car("fortuner", "scorpio")

console.log(carOne)


carOne.color = "green";

console.log(carOne)