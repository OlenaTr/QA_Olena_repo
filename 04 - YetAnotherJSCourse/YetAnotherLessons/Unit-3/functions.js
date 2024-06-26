const Chance = require('chance');
const chance = new Chance();
/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 * https://uk.javascript.info/callbacks
 */

/**
 * Level - Easy
 * Task - 1
 * create a function task1Func which will always return true
 * use function definition (also called a function declaration, or function statement)
 */

function task1Func() {
	return true;
}
// enter your code here


/**
 * Level - Easy
 * Task - 2
 * create a variable task2Func which will return a function
 * which will take year of birth as a parameter and returns calculated age based on current year
 * use function expression
 */

let task2Func = function(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
}
// enter your code here


/**
 * Level - Easy
 * Task - 3
 * create a variable task3Func which will return a function
 * which will take parameter gender as a number (where 1 stands for woman, 2 is man and 0 is other)
 * and returns text ee.g. "My gender is woman"
 * use function expression with arrow function notation
 */

let task3Func = (gender) => {
	let genderName = "other";
	if (gender === 1) {
		genderName = "woman";
	} else if (gender === 2) {
		genderName = "man";
	}
    return "My gender is " + genderName;
}
// enter your code here


/**
 * Level - Easy
 * Task - 4
 * Create a function task4Func which will take 2 parameters
 * and calculate sum of those two params
 * NOTE: assume parameters are always numbers
 */

function task4Func(a, b) {
	return a + b;
}
// enter your code here


/**
 * Level - Easy
 * Task - 5
 * Create a function task5Func which will do same as the function from Task4
 * just make second parameter to have a default value equal 10
 */

function task5Func(a, b = 10) {
	return a + b;
}
// enter your code here


/**
 * Level - Easy
 * Task - 6
 * Create a function task6Func which will get an object
 * e.g. {firstName: "Jack", lastName: "London"}
 * and returns a string firstName plus lastName, separated by space
 */

function task6Func(person) {
	return `${person.firstName} ${person.lastName}`;
}
// enter your code here


/**
 * Level - Easy
 * Task - 7
 * Create a function task7Func that returns an object based on the given information
 * (params may be null, please use default ones (empty strings and 0 for age))
 * @example
 * task7Func("Jack", "London", 52) should return
 * {
 *    firstName: "Jack"
 *    lastName: "London"
 *    age: 52
 * }
 */

function task7Func(firstName = "", lastName = "", age = 0) {
    return { firstName, lastName, age };
}
// enter your code here


/**
 * Level - Easy
 * Task - 8
 * Create a function task8Func which checks if number is odd or even
 * And returns true if odd and false if even
 * Hint: think about a remainder of two numbers
 */

function task8Func(number) {
    return number % 2 !== 0;
}
// enter your code here


/**
 * Level - Easy
 * Task - 9
 * Create a function task9Func which returns the first shortest of the words in the given array
 * @example
 * task9Func(["ten", "two", "four"]) // => ten
 */

function task9Func(words) {
	if (words.length === 0) {
		return null;
	}
	let shortestWord = words[0];
	for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}
// enter your code here


/**
 * Level - Easy
 * Task - 10
 * Create a function task10Func which calculates total distance traveled
 * based on an array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Krakow", distance: 879}, {direction: "Kiyv - Tokyo", distance: 8193}]
 */

function task10Func(trips) {
	let totalDistance = 0;
	for (let i = 0; i < trips.length; i++) {
	  totalDistance += trips[i].distance;
	}
	return totalDistance;
  }
// enter your code here


/**
 * Level - Easy
 * Task - 11
 * Callback
 * Create a function task11Func which will take another function as an argument
 * and returns result of execution of that another function in string format
 * NOTE: you can use `someFunc1` or `someFunc2` for testing purposes
 * @example
 * if callBackFunction (e.g. `someFunc1`) returns "THIS IS THE RESULT"
 * than task11Func should return "Callback result = THIS IS THE RESULT"
 */

// DO NOT DELETE below code
const someFunc1 = () => {
	return chance.sentence(); // returns random sentence
}

function task11Func(someFunc1) {
	const result = someFunc1();
	return `Callback result = ${result}`;
  }
// enter your code here



/**
 * Level - Normal
 * Task - 12
 * Rest parameter
 * Create a function task12Func which returns an object
 * containing number of parameters passed in function and first parameter value
 * @example
 * {
 *     paramsNumber: 3,
 *     firstParam: _first_param_value_,
 * }
 * Note: use rest parameter and use it to get first param value
 */

function task12Func(...params) {
    return {
        paramsNumber: params.length,
        firstParam: params[0],
    };
}
// enter your code here


/**
 * Level - Normal
 * Task - 13
 * Create a function task13Func which returns word google with given numbers of "o" symbols
 * @example
 * task13Func(5) // => gooooogle
 */

function task13Func(count) {
	if (count < 1) {
	  return '';
	}
	let result = 'g';
	for (let i = 0; i < count; i++) {
	  result += 'o';
	}
	result += 'gle';
	return result;
  }
// enter your code here


/**
 * Level - Hardcore
 * Task - 14
 * Implement the methods inside the given object which:
 * 1. keys() - console logs keys of the given object (please use for..in cycle)
 * 2. call() - returns the string 'My name is Jack London, and I am 25 years old. My best friend is a wolf'
 * The string should be constructed using the properties from the object
 */

const task14Object = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friend: 'wolf',
	keys() {
		for (let key in this) {
			console.log(key);
		}
	},
	call() {
		return `My name is ${this.name} ${this.lastName} and I am ${this.age} years old. My best friend is a ${this.friend}`;
	}
};

/**
 * Level - Hardcore
 * Task - 15
 * Create a function task15Func which will calculate a Final Price
 * considering the Price and the Discount Percentage
 * hint: you need to use the Closure here
 * JS Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * @example
 * const discount10 = discountFunction(10);
 * console.log(discount10(90)); // 81
 * console.log(discount10(100)); // 90
 */

function task15Func(discountPercentage) {
    return function (amount) {
        return amount - (amount * (discountPercentage / 100));
    };
}

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
 * https://www.codewars.com/kata/5b752a42b11814b09c00005d
 * the last one requires recursion check below for help
 * https://learn.javascript.ru/recursion
 * https://www.programiz.com/javascript/recursion
 */

module.exports = {
	task1Func, task2Func, task3Func,
	task4Func, task5Func, task6Func,
	task7Func, task8Func, task9Func,
	task10Func, task11Func, task12Func,
	task13Func, task14Object, task15Func
};
