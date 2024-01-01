/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return +number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  return Math.max(a, b, c);
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/w iki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let { x: queenX, y: queenY } = queen;
  const { x: kingX, y: kingY } = king;
  if (queenX === kingX || queenY === kingY) return true;

  while (queenX !== kingX && queenY !== kingY) {
    if (queenX < kingX && queenY < kingY) {
      queenX += 1;
      queenY += 1;
    } else if (queenX < kingX && queenY > kingY) {
      queenX += 1;
      queenY -= 1;
    } else if (queenX > kingX && queenY < kingY) {
      queenX -= 1;
      queenY += 1;
    } else if (queenX > kingX && queenY > kingY) {
      queenX -= 1;
      queenY -= 1;
    }
    if (queenX === kingX && queenY === kingY) {
      return true;
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (a === b && a + b > c) return true;
  if (a === c && a + c > b) return true;
  if (b === c && b + c > a) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNumerals = '';
  let number = +num;
  while (number > 0) {
    if ((number % 10 !== 0 && number > 10) || number === 10) {
      romanNumerals += 'X';
      number -= 10;
    } else if (number === 9) {
      romanNumerals += 'IX';
      break;
    } else if ((number % 5 !== 0 && number > 5) || number === 5) {
      romanNumerals += 'V';
      number -= 5;
    } else if (number === 4) {
      romanNumerals += 'IV';
      break;
    } else if (number < 4) {
      romanNumerals += 'I';
      number -= 1;
    }
  }
  return romanNumerals;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        break;
    }
    if (i < numberStr.length - 1) result += ' ';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numConvertedToString = `${num}`;
  const digitConvertToString = `${digit}`;
  for (let i = 0; i < numConvertedToString.length; i += 1) {
    if (numConvertedToString[i] === digitConvertToString) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let sumRight = 0;
    sumLeft += arr[i];
    for (let j = i + 2; j < arr.length; j += 1) {
      sumRight += arr[j];
    }
    if (sumLeft === sumRight) return i + 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const getMatrix = (length) => {
    const matrix = [];
    for (let i = 0; i < length; i += 1) {
      matrix[i] = [];
      for (let j = 0; j < length; j += 1) {
        matrix[i][j] = 0;
      }
    }
    return matrix;
  };
  const spiralMatrix = getMatrix(size);
  let number = 1;
  let lengthOfFill = size;
  let row = 0;
  let column = 0;
  while (number <= size ** 2) {
    while (column < lengthOfFill && number <= size ** 2) {
      spiralMatrix[row][column] = number;
      column += 1;
      number += 1;
    }
    column -= 1;
    lengthOfFill -= 1;
    while (row < lengthOfFill && number <= size ** 2) {
      row += 1;
      spiralMatrix[row][column] = number;
      number += 1;
    }
    lengthOfFill += 1;
    column -= 1;
    while (column >= size - lengthOfFill && number <= size ** 2) {
      spiralMatrix[row][column] = number;
      number += 1;
      column -= 1;
    }
    column += 1;
    row -= 1;
    while (row > size - lengthOfFill && number <= size ** 2) {
      spiralMatrix[row][column] = number;
      number += 1;
      row -= 1;
    }
    row += 1;
    column += 1;
    lengthOfFill -= 1;
  }
  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const quickSort = (array, firstIndex, lastIndex) => {
    if (lastIndex - firstIndex < 1) return array;
    let pivotIndex = Math.floor((firstIndex + lastIndex) / 2);
    const pivot = array[pivotIndex];
    const newArray = array;
    let indexForLess = firstIndex;
    let indexForGreater = lastIndex;
    while (indexForLess <= indexForGreater) {
      while (newArray[indexForLess] < pivot) {
        indexForLess += 1;
      }
      while (newArray[indexForGreater] > pivot) {
        indexForGreater -= 1;
      }
      if (indexForLess <= indexForGreater) {
        [newArray[indexForLess], newArray[indexForGreater]] = [
          newArray[indexForGreater],
          newArray[indexForLess],
        ];
        indexForLess += 1;
        indexForGreater -= 1;
      }
    }
    pivotIndex = indexForLess;
    quickSort(newArray, firstIndex, pivotIndex - 1);
    quickSort(newArray, pivotIndex, lastIndex);
    return newArray;
  };
  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, iterations) {
  if (iterations < 1) return str;
  let shuffleStr = '';
  for (let i = 0; i < str.length; i += 2) {
    shuffleStr += str[i];
  }
  for (let i = 1; i < str.length; i += 2) {
    shuffleStr += str[i];
  }
  return shuffleChar(shuffleStr, iterations - 1);
}

// function shuffleChar(str, iterations) {
//   const shuffleStr = [];
//   shuffleStr.length = str.length;
//   function getIndex(length, initialIndex, numberOfShuffle, oddIndex) {
//     if (numberOfShuffle < 1) return initialIndex;
//     if (initialIndex % 2 === 0) {
//       const newIndex = initialIndex / 2;
//       return getIndex(initialIndex, newIndex, numberOfShuffle - 1, oddIndex);
//     }
//     const newIndex = length / 2 + oddIndex;
//     return getIndex(length, newIndex, numberOfShuffle - 1, oddIndex + 1);
//   }
//   let oddIndex = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     const index = getIndex(str.length, i, iterations, oddIndex);
//     shuffleStr[index] = str[i];
//     if (i % 2 !== 0) {
//       oddIndex += 1;
//     }
//   }
//   return shuffleStr.join('');
// }
// const itter = 1;

// const str = shuffleChar('01234567', itter);

// console.log(str, 'index: ', str.indexOf('1'));

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  // let lenght = matrix.length;
  // const rotateArr = matrix;
  // for (let i = 0; i < matrix.length; i += 1) {
  //   rotateArr[i] = [];
  //   for (let j = 0; j < matrix.length; j += 1) {
  //     [rotateArr[i][j]] = [matrix[lenght - 1][i]];
  //     lenght -= 1;
  //   }
  //   lenght = matrix.length;
  // }
  // return matrix;
  const rotateArr = matrix;
  const numberOfSquares = Math.floor(matrix.length / 2);
  let l = matrix.length - 1;
  for (let i = 0; i < numberOfSquares; i += 1) {
    let a = l;
    for (let j = i; j < matrix.length - i - 1; j += 1) {
      [rotateArr[i][j], rotateArr[j][l]] = [rotateArr[j][l], rotateArr[i][j]];
      [rotateArr[i][j], rotateArr[l][a]] = [rotateArr[l][a], rotateArr[i][j]];
      [rotateArr[i][j], rotateArr[a][i]] = [rotateArr[a][i], rotateArr[i][j]];
      a -= 1;
    }
    l -= 1;
  }
  return matrix;
}
module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
