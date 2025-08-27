

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  static carColor() {
    return "car color is blue";
  }
}

const carDetail = new Car("BMW");


console.log("car Color :", Car.carColor());



console.log("my car color is (err) :", carDetail.carColor());



class Person {
  constructor(name) {
    this.name = name;
  }

  static greeting(name) {
    return "Hello, " + name;
  }
}

const person1 = new Person("shivam");
