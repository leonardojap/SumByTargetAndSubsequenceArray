const findPairWithSum = (numbers, targetSum) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let num1 = targetSum - numbers[i]; //substact the current number from the target sum
    if (numbers.includes(num1)) {
      //if we find the substacted number in the array, then we have ONE pair solution
      result.push(numbers[i], num1);
      break; // break the loop, because we only need ONE pair solution
    }
  }
  return result; // return the result array, or an empty array if there is no solution
};

const validateSubsequence = (array, sequence) => {
  let countSequece = 0;

  //lineal cost (1 loop)
  for (i = 0; i < array.length; i++) {
    if (array[i] === sequence[countSequece]) {
      countSequece++; // if the current number in the array is equal to the current number in the sequence, then we have a match at the same position (order)
    }
  }

  let isSubsequence = countSequece === sequence.length; // if countSequece is equal to the length of the sequence, then we have a subsequence
  return isSubsequence; // return true or false
};

//lest's test the function FindPairWithSum
const numbers = [2, 7, 11, 15];
const targetSum = 9;
const sumByTarget1 = findPairWithSum(numbers, targetSum);
console.log(sumByTarget); // [2, 7]

const targetSum2 = 10;
const sumByTarget2 = findPairWithSum(numbers, targetSum2);
console.log(sumByTarget2); // []

//lest's test the function validateSubsequence
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
const isSubsequence = validateSubsequence(array, sequence);
console.log(isSubsequence); // true

const sequence2 = [5, 1, 22, 6, 25];
const isSubsequence2 = validateSubsequence(array, sequence2);
console.log(isSubsequence2); // false
