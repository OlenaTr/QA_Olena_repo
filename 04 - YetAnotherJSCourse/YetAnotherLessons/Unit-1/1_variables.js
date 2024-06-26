/**
 * Additional Reading:
 *
 * https://uk.javascript.info/variables
 * https://uk.javascript.info/types
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
 * https://uk.javascript.info/operators
 * https://uk.javascript.info/type-conversions
 * https://habr.com/ru/company/ruvds/blog/347866/
 */

/**
 * Level - Easy
 * Create "var" variable named myNum and set its value equal to 74
 */
var myNum = 74;
// enter your code here

/**
 * Level - Easy
 * Create "let" variable named myText and set its value equal to "Jack"
 */
let myText = "Jack";
// enter your code here

/**
 * Level - Easy
 * Create "const" variable named myBool and set its value equal to false
 */
const myBool = false;
// enter your code here

///
/// ----- Starting from here I'd recommend to use let (or const if applicable) variables
///

/**
 * Level - Easy
 * Create variable named myNull and set its value equal to null
 */
const myNull = null;
// enter your code here

/**
 * Level - Easy
 * Create variable named myUndefined and set its value equal to undefined
 */
const myUndefined = undefined;
// enter your code here

/**
 * Level - Easy
 * Create variable named myArr and set its value to be an array of numbers from 2 to 7
 */
const myArr = [2,3,4,5,6,7];
// enter your code here

/**
 * Level - Easy
 * Create variable named myArr1 and set its value to be an empty array
 */
const myArr1 = [];
// enter your code here

/**
 * Level - Normal
 * Create variable named myArr1_1 and set its value to be an empty array
 * make first arrray element to be equal to 'I am the first'
 */
const myArr1_1 = [];
myArr1_1[0] = 'I am the first'; 
// enter your code here

/**
 * Level - Normal
 * Create variable named myArr2 and set its value to be an empty array using Array constructor
 * NOTE: use `new Array` syntax
 */
const myArr2 = new Array();
// enter your code here



/**
 * Level - Normal
 * Create variable named myArr3 and set its value to be an array of lenght 3 and have empty elements
 * use Array constructor
 * NOTE: use `new Array` syntax
 */
const myArr3 = new Array(3);
// enter your code here

/**
 * Level - Normal
 * Create variable named myArr4 and set its value to be an array of lenght 4 and have next elements:
 * first element = 10
 * second element = null
 * third element = "I'm the third one"
 * fours element = false
 * use Array constructor
 * NOTE: use `new Array` syntax
 */
const myArr4 = new Array(10, null, "I'm the third one", false);
// enter your code here

/**
 * Level - Easy
 * Create variable named fourthElement and set its value to be myArr 4th element
 * NOTE: you should use myArr variable here
 */
const fourthElement = myArr[3];
// enter your code here

/**
 * Level - Easy
 * Create variable named arrayOperations and set its value to be myArr 4th element minus myArr 3d element
 * NOTE: you should use myArr variable here
 */
const arrayOperations = myArr[3] - myArr[2];
// enter your code here

/**
 * Level - Easy
 * Create variable named myNum2 and set its value equal myNum divided by 2
 * NOTE: you should use myNum variable here
 */
const myNum2 = myNum / 2;
// enter your code here

/**
 * Level - Easy
 * Create variable named myText2 and set its value to be myText, then goes space and word is, then space and myNum2
 * NOTE: Use myText and myNum2 variables to solve it. Result should be something like "George is 21"
 */
const myText2 = myText + " is " + myNum2;
// enter your code here

/**
 * Level - Normal
 * Create variable named myBool2 and set its value to be equality comparison (not strict) of myNum and myNum2 variables
 */
const myBool2 = myNum == myNum2;
// enter your code here

/**
 * Level - Normal
 * Create variable named myBool3 and set its value to be strict equality comparison of myNum2 variable and "37"
 * NOTE: string should be used
 */
const myBool3 = myNum2 === "37";
// enter your code here

/**
 * Create variable named myUndefined2 and set its value equal to without "undefined" word usage
 */
let myUndefined2;
// enter your code here

/**
 * Level - Easy
 * Create variable named myObj and set its value as object with key firstName and value "John"
 */
const myObj = {
    firstName: "John"
};
// enter your code here



/**
 * Level - Easy
 * Set new key/property to myObj object named lastName with value "Dou"
 */
myObj.lastName = "Dou";
// enter your code here

/**
 * Level - Easy
 * Set new key/property to myObj object named fullName with value of concatenation of firstName, space, and lastName
 * NOTE: you should use myObj in this task
 */
myObj.fullName = myObj.firstName + " " + myObj.lastName;
// enter your code here

module.exports = {
    myNum, myText, myBool, myNull, myUndefined,
    myArr, myArr1, myArr1_1, myArr2, myArr3, myArr4, fourthElement,
    arrayOperations, myUndefined2, myNum2, myText2,
    myBool2, myBool3,
    myObj
};
