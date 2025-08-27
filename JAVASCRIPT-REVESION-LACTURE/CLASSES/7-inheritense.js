

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("john", 30);


class PersonDetails extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

const person2 = new PersonDetails(
  person1.name,
  person1.age,
  "software Engineer"
);

console.log(
  "person details :",
  " my name is " +
    " " +
    person2.name +
    " " +
    "and my age is " +
    " " +
    person2.age +
    " " +
    "and i am working as a" +
    person2.job
);