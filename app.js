class Person {
  constructor(name, pets, residence, hobbies) {
    (this.name = name),
      (this.pets = pets),
      (this.residence = residence),
      (this.hobbies = hobbies);
    //   this.info(),
    //   this.soundOff();
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(removeHobby) {
    let foundEl = this.hobbies.indexOf(removeHobby);
    this.hobbies.splice(foundEl, 1);
    //this.hobbies = this.hobbies.filter(e => e != removeHobby);
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);

    this.occupation = occupation;
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(removeHobby) {
    let foundEl = this.hobbies.indexOf(removeHobby);
    this.hobbies.splice(foundEl, 1);
    //this.hobbies = this.hobbies.filter(e => e != removeHobby);
  }

  greeting() {
    console.log("Hello fellow Coder!");
  }
}

const ross = new Person("Ross", 2, "Birmingham", [
  "kayak fishing",
  "solving code",
  "looking cool",
]);
const aj = new Coder(
  "AJ",
  1,
  "Los Angeles",
  ["golf", "sports"],
  "Full Stack Web Developer"
);
console.log(ross, aj);
ross.greeting();
aj.greeting();

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    if (!b) {
      this.result = a + this.result;
    } else {
      this.result = a + b;
    }
  }
  subtract(a, b) {
    if (!b) {
      this.result = a - this.result;
    } else {
      this.result = a - b;
    }
  }
  multiply(a, b) {
    if (!b) {
      this.result = a * this.result;
    } else {
      this.result = a * b;
    }
  }
  divide(a, b) {
    if (!b) {
      this.result = a / this.result;
    } else {
      this.result = a / b;
    }
  }
  displayResult() {
    console.log(this.result);
  }
}
let cal = new Calculator();
cal.add(4, 2);
cal.displayResult();
cal.add(4);
cal.displayResult();
