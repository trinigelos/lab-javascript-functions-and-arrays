// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 === num2) return num1;
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOfTwoNumbers(3, 7));
console.log(maxOfTwoNumbers(9, 7));

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words.length === 0) return null;
  let longestWord = words[0]; //to save the longest word

  for (let i = 0; i < words.length; i++) {
    //loop through the array of words
    if (words[i].length > longestWord.length) {
      // check if the current word is longer than the longest saved.
      longestWord = words[i]; //if so, save it as the longest.
    }
  }
  return longestWord;
}

console.log(findLongestWord(words));

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumNumbers(numbers));

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arr) {
  if (arr.length === 0) return 0;
  let total = 0; // to sum the array

  for (let i = 0; i < arr.length; i++) {
    //loop through them
    const value = arr[i]; // save current element and then check the data type

    if (typeof value === 'number') {
      total += value; //if it is a number, add it up
    } else if (typeof value === 'string') {
      total += value.length; // if it is a string, add its length
    } else if (typeof value === 'boolean') {
      total += value ? 1 : 0; // if it is a boolean, true is 1, false is 0.
    } else {
      throw new Error("Unsupported data type sir or ma'am");
    }
  }

  return total;
}

console.log(sum(mixedArr));

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
// sum all numbers and then divide by the amount of numbers there are.
// loop through all the elements and add them up in a new var.
//count the length of the array and divide the new var by the length of the array.

function averageNumbers(numbersAvg) {
  if (numbersAvg.length === 0) return null;

  let sum = 0;
  for (let i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }
  let average = sum / numbersAvg.length;

  return average;
}
let average = averageNumbers(numbersAvg);

console.log('average', average);

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  if (words.length === 0) return null;

  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    sum += words[i].length;
  }
  let averageLength = sum / words.length;

  return averageLength;
}

let averageLength = averageWordLength(wordsArr);
console.log('average Length', averageLength);

// Bonus - Iteration #4.1
//loop through all the array, check if it is boolean add 1 true or 0 false,
// check if it is string and add the length, check if it is number and add it.
// add it all up in sum
// return the average of sum / arrays length

let mixyArray = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(mixyArray) {
  if (mixyArray.length === 0) return null;

  let sum = 0;
  for (let i = 0; i < mixyArray.length; i++) {
    if (typeof mixyArray[i] === 'boolean') {
      sum += mixyArray[i] ? 1 : 0;
    } else if (typeof mixyArray[i] === 'string') {
      sum += mixyArray[i].length;
    } else if (typeof mixyArray[i] === 'number') {
      sum += mixyArray[i];
    }
  }

  let avgMix = sum / mixyArray.length;

  return avgMix;
}

let avgMix = avg(mixyArray);
console.log('generic average', avgMix);

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
//loop through the array,
// then check if in the new array, this word appears with indexOf. if it is -1 means it is not there
// then push it to the new array

function uniquifyArray(words) {
  if (words.length === 0) return null;
  let uniqueWords = [];

  for (let i = 0; i < words.length; i++) {
    if (uniqueWords.indexOf(words[i]) === -1) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords;
}
let uniqueWords = uniquifyArray(wordsUnique);
console.log(uniqueWords);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr.length === 0) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true;
    }
  }
  return false;
}
console.log(doesWordExist(wordsFind, 'eating'));

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, wordToCheck) {
  if (arr.length === 0) return 0;

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === wordToCheck) {
      count++;
    }
  }
  return count;
}
const wordToCheck = 'subset';
const occurrenceCount = howManyTimes(wordsCount, wordToCheck);

console.log(`The word "${wordToCheck}" appears ${occurrenceCount} times in the array.`);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes
  };
}
