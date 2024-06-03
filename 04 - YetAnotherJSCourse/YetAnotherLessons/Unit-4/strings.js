/**
 * Additional Reading:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * https://uk.javascript.info/regular-expressions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */

/**
 * Level - Easy
 * Task - 1
 * Create a task1Func which will verify if string str1 contains another string str2
 */
let task1Func = (str1, str2) => {
  return str1.includes(str2);
}
// enter your code here

/**
 * Level - Easy
 * Task - 2
 * Create a task2Func which will return index of another str2 in a str1
 */
let task2Func = (str1, str2) => {
  return str1.indexOf(str2);
}
// enter your code here

/**
 * Level - Easy
 * Task - 3
 * Create a task3Func which will return a string replacing its part
 * with "Ah-a-ha-ha. Changing a part of the string" string
 * @example
 * task3Func('tests', 'es') => 'tAh-a-ha-ha. Changing a part of the stringts'
 */
let task3Func = (str, part) => {
  return str.replace(part, "Ah-a-ha-ha. Changing a part of the string");
}
// enter your code here

/**
 * Level - Easy
 * Task - 4
 * Create a task4Func which will remove unnecessary space at the beginning and end of the string
 * if result will be an empty string should return 'STRING IS EMPTY'
 */
let task4Func = (str) => {
  const trimmedStr = str.trim();
  if (trimmedStr === '') {
      return 'STRING IS EMPTY';
  }
  return trimmedStr;
}
// enter your code here

/**
 * Level - Normal
 * Task - 5
 * Create a task5Func which will reverse a given string;
 * If number was received method should return the string 'This is not a string!'
 * console.log(task5Func('google)) // 'elgoog'
 * console.log(task5Func(123)) // 'This is not a string!'
 */
let task5Func = (str) => {
  if (typeof str === 'string') {
      return str.split('').reverse().join('');
  } else {
      return 'This is not a string!';
  }
}
// enter your code here

/**
 * Level - Normal
 * Task - 6
 * Create a task6Func which will
 * calculate a century by given year if a number is passed
 * @example
 * console.log(task6Func(1325)) // 13
 * console.log(task6Func(1801)) // 18
 * console.log(task6Func(601)) // 6
 * console.log(task6Func(21)) // 1
 */
let task6Func = (year) => {
  if (typeof year === 'number' && year > 0) {
      if (year <= 100) {
          return 1;
      }
      return Math.floor(year / 100);
  } else {
      return 'This is not a valid year!';
  }
}
// enter your code here

/**
 * Level - Normal
 * Task - 7
 * Create a task7Func which will
 * calculate how many times a letter appears in the provided 'string'
 * NOTE: calculation should be case-insensitive e.g. 'K' === 'k' and vise versa
 * @example
 * console.log(strCount('Google', 'o')) // 2
 * console.log(strCount('I know JS', 'j')) // 1
 * console.log(strCount('', 'z')) // 0
 * NOTE: don't use for loops
 */
let task7Func = (str, letter) => {
  const lowerStr = str.toLowerCase();
  const lowerLetter = letter.toLowerCase();
  const count = lowerStr.split(lowerLetter).length - 1;
  return count;
}
// enter your code here

/**
 * Level - Normal
 * Task - 8
 * Create a task8Func which will
 * substitute value in the square brackets with '[----]'
 * @example
 * console.log(replaceConfidential("MR.[Johns] was responsible for ...")) // => "MR.[----] was responsible for ..."
 */
let task8Func = (str) => {
  return str.replace(/\[.*?\]/g, '[----]');
}
// enter your code here

/**
 * Level - Normal
 * Task - 9
 * Create a task9Func which will
 * reduce the length of the string.
 * If it is longer than the given maxLength - reduced its length to maxLength symbols
 * and add "..." to the end.
 * Return itself if it's not that long.
 * @example
 * console.log(truncateString('The story begins long-long ago.', 6)) // 'TThe st...'
 * console.log(truncateString('Hello', 6)) // 'Hello'
 */
let task9Func = (str, maxLength) => {
  if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
  }
  return str;
}
// enter your code here

/**
 * Hardcore tasks from codewars.com:
 *
 * https://www.codewars.com/kata/595970246c9b8fa0a8000086
 * https://www.codewars.com/kata/57e3f79c9cb119374600046b
 * https://www.codewars.com/kata/5b68983a975680155000005d
 */

module.exports = {
  task1Func, task2Func, task3Func,
  task4Func, task5Func, task6Func,
  task7Func, task8Func, task9Func,
};
