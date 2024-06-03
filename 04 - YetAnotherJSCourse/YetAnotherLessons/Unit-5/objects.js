/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

/**
 * Level - Easy
 * Task - 1
 * Create an object 'person' with 'firstName' and 'lastName' properties
 * Object should contain 'getFullName' method that returns full name ('firstName lastName')
 */
const person = {
	firstName: "",
	lastName: "",
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
  };
// enter your code here

/**
 * Level - Easy
 * Task - 2
 * Create a makeRobot which will create a 'robot' object from person object by
 * adding additional property to a 'person'
 * 'robot' should have 'batteryLevel' property (e.g. batteryLevel=3)
 * NOTE: use Object assign method
 */
function makeRobot(person) {
  return Object.assign(person, { batteryLevel: 3 });
}

/**
 * Level - Easy
 * Task - 3
 * Create a isARobot which will check if an object is a robot
 * by checking if object has property (e.g. makeRobot)
 * try to find more than 1 way to do it
 */
function isARobot(obj) {
	return obj.hasOwnProperty("batteryLevel");
  }

  function isARobot(obj) {
	return "batteryLevel" in obj;
  }

/**
 * Level - Normal
 * Task - 4
 * Create a task4Func which will
 * return the list of object properties if theirs values are Numbers
 */
function task4Func(obj) {
	const numericProperties = [];
  
	for (const key in obj) {
	  if (typeof obj[key] === "number") {
		numericProperties.push(key);
	  }
	}
  
	return numericProperties;
  }

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/57d001b405c186ccb6000304
 * https://www.codewars.com/kata/570ef4d6127ad17515000b87
 * https://www.codewars.com/kata/577ff15ad648a14b780000e7
 * 
 * function welcome(language) {
  const database = new Map([
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"]
  ]);

  return database.has(language) ? database.get(language) : "Welcome";
}

 * 
 */

module.exports = {
	person,
	makeRobot,
	isARobot,
	task4Func
};