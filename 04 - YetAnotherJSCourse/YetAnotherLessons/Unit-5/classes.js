/**
 * Additional Reading:
 *
 * https://uk.javascript.info/classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * https://javascript.info/class
 * https://javascript.info/class-inheritance
 */

/**
 * Level - Easy
 * Task - 1 - Part 1 (verification will work only once Part 2 is implemented)
 * Implement class Figure with:
 * 1) properties name and numberOfPoints
 * 2) constructor should get numberOfPoints and name
 * 3) method getDescription - 'This is a ${name} with ${numberOfPoints} points'
 */
// enter your code here
class Figure {
    constructor(name, numberOfPoints) {
      this.name = name;
      this.numberOfPoints = numberOfPoints;
    }
  
    getDescription() {
      return `This is a ${this.name} with ${this.numberOfPoints} points`;
    }
  }
/**
 * Level - Easy
 * Task - 1 - Part 2
 * Create an instance of a class Figure
 */
let figure = new Figure("trapezium", 4);
// enter your code here

/**
 * Level - Easy
 * Task - 2 - Part 1 (verification will work only once Part 2 is implemented)
 * Implement class Square that extends Figure with:
 * 1) property sideLength and figureArea
 * 2) constructor should additionally get sideLength and calculate figureArea
 * 3) getter method area that returns property figureArea
 */
class Square extends Figure {
  constructor(name, numberOfPoints, sideLength) {
    super(name, numberOfPoints);
    this.sideLength = sideLength;
    this.figureArea = sideLength * sideLength;
  }

  get area() {
    return this.figureArea;
  }
}
// enter your code here

/**
 * Level - Easy
 * Task - 2 - Part 2
 * Create an instance of a class Square
 */
let square = new Square("Square", 4, 5);
// enter your code here

/**
 * Additional tasks from codewars.com:
 *
 * https://www.codewars.com/kata/597c684822bc9388f600010f
 * 
 * function getFullName(firstName, lastName) {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  } else if (firstName) {
    return firstName;
  } else if (lastName) {
    return lastName;
  } else {
    return "";
  }
}
 * https://www.codewars.com/kata/547274e24481cfc469000416

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = 'Man';
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = 'Woman';
  }
}

function creation() {
  const Adam = new Man('Adam');
  const Eve = new Woman('Eve');
  return [Adam, Eve];
}

 * https://www.codewars.com/kata/55a14aa4817efe41c20000bc

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} speaks.`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

let cat = new Cat("Mr Whiskers");
console.log(cat.speak());

 * https://www.codewars.com/kata/53f0f358b9cb376eca001079

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);

 * https://www.codewars.com/kata/56f935002e6c0d55fa000d92

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}


 * https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
 */

module.exports = {
    figure,
    square
};
