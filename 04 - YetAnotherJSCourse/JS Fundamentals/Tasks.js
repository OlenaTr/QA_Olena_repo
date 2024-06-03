//findSeniorEmployees

function findSeniorEmployees(employees, currentYear) {
    // Implement here your function
    let seniorEmployees = [];
    employees.forEach(employee => {
        const yearsOfService = currentYear - employee.yearOfEmployment;
        if (yearsOfService >= 10 && employee.isActive) {
            seniorEmployees.push(employee);
        }
    });
    return seniorEmployees;
}

//getRandomEmail

function getRandomEmail(domain) {
    // Generate a random string
    let randomString = Math.random().toString(36).substring(7);
    // Combine the random string with the domain name to form the email address
    let email = `${randomString}@${domain}`;
    return email;
}
// This is how the function could be caled
getRandomEmail('google.com');




//The Game

console.log('hi');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else {
        return 'Error';
    }
};
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    }
};
const playGame = () => {
    const userChoice = getUserChoice('rock'); // Здесь вы можете передать 'rock', 'paper' или 'scissors'
    const computerChoice = getComputerChoice();
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();



//Sleep Debt Calculator


const getActualSleepHours = () => {
  const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 6;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 8;
      case 'friday':
        return 7;
      case 'saturday':
        return 9;
      case 'sunday':
        return 8;
      default:
        return 0; // If an invalid day is passed, return 0 hours
    }
  };

  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  let totalSleepHours = 0;

  for (let day of daysOfWeek) {
    totalSleepHours += getSleepHours(day);
  }

  return totalSleepHours;
};

const getIdealSleepHours = () => {
  const idealHoursPerNight = 8;
  return idealHoursPerNight * 7; 
};
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    const overSleep = actualSleepHours - idealSleepHours;
    console.log(`You got ${overSleep} hours more sleep than needed.`);
  } else {
    const underSleep = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest. You are ${underSleep} hours under your ideal sleep.`);
  }
};
calculateSleepDebt()





//Whale Talk

let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].toLowerCase() === 'e') {
    resultArray.push(input[i]);
  } else if (input[i].toLowerCase() === 'u') {
    resultArray.push(input[i]);
    resultArray.push(input[i]); // Double the 'u'
  } else {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i].toLowerCase() === vowels[j]) {
        resultArray.push(input[i]);
      }
    }
  }
}

let resultString = resultArray.join('').toUpperCase();
console.log(resultString);




let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
count = 0;
//console.log(storyWords.join(' '));
storyWords = storyWords.filter(function(word) {
  return word !== unnecessaryWord;
});
storyWords = storyWords.map(function(word) {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});
let badWordIndex = storyWords.findIndex(word => word === badWord);
console.log(badWordIndex);
storyWords[badWordIndex] = 'really';
console.log(storyWords.join(' '));
const longWordIndex = storyWords.findIndex(word => word.length > 10);

// Replace the long word with a shorter one
if (longWordIndex !== -1) {
    // Choose a replacement word
    const replacementWord = 'stunning'; // You can choose from 'dazzling' or 'glorious' as well

    // Replace the long word with the replacement word
    storyWords[longWordIndex] = replacementWord;

    // Update the original story string with the replacement word
    story = story.replace(storyWords[longWordIndex], replacementWord);
}

console.log(story);




//Meal Maker

const menu = {
  _meal: 'duck',
  _price: 13,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};
console.log(menu.todaysSpecial);






//Team Stats

const team = {
  _players: [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 25
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 23
    },
    {
      firstName: 'Mike',
      lastName: 'Johnson',
      age: 27
    }
  ],
 _games: [
    {
      opponent: 'Team A',
      teamPoints: 20,
      opponentPoints: 15
    },
    {
      opponent: 'Team B',
      teamPoints: 25,
      opponentPoints: 18
    },
    {
      opponent: 'Team C',
      teamPoints: 18,
      opponentPoints: 20
    }
  ],
   get players() {
    return this._players;
  },
 get games() {
    return this._games;
  },
   addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(newPlayer);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(newGame);
  }
};
team.addPlayer('Bugs ', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);



//Race number

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let raceAge = 18;
  if (raceAge > 18 && registeredEarly === true) {
  console.log(`9:30 am ${raceNumber}`);
} else if (raceAge > 18 && registeredEarly === false) {
  console.log(`11:00 am ${raceNumber}`);
} else if  (raceAge < 18) {
  console.log(`12:30 pm ${raceNumber}`);
} else {
  console.log('See the registration!');
};



//Magic Eight Ball


const userName = "Helen";
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'Am I a robot?';
console.log (userQuestion);
const randomNumber = Math.floor(Math.random() * 8);
console.log (randomNumber);
let eightBall = '';
if (randomNumber == 1) {
  console.log('It is certain');
  } else if (randomNumber == 2) {
  console.log('It is decidedly so.');
} else if (randomNumber == 3) {
  console.log('Reply hazy try again');
} else if (randomNumber == 4) {
  console.log('Cannot predict now');
}  else if (randomNumber == 5) {
  console.log('Do not count on it');
} else if (randomNumber == 6) {
  console.log('My sources say no');
} else if (randomNumber == 7) {
  console.log('Outlook not so good');
} else {
  console.log('Signs point to yes');
};


//Weather

//Temereture today by Kelvin
const kelvin = 0;
//Temereture today by Celsius
const celsius = kelvin -273;
//Temereture today by Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//Roundind Fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
//Round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);






//Dog years

//Me in 2023
const myAge = 31;
let earlyYears = 2;
earlyYears *=10.5;
//Years*4
let laterYears = myAge - 2;
laterYears *= 4;
console.log(laterYears);
console.log(earlyYears);
// Sum of dog years
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Olena Triukhan'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`)




//Seasons

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
  } else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


