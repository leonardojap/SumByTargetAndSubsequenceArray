# Install and run:

- Open your terminal and execute:

```bash
git clone https://github.com/leonardojap/SumByTargetAndSubsequenceArray.git
cd SumByTargetAndSubsequenceArray/
node index.js
```

![output](https://github.com/leonardojap/SumByTargetAndSubsequenceArray/assets/8810299/d6bd3f5f-6d6d-4ab2-b1bc-2e47925093d7)


# Two Number Sum

Given an array of integers, no number in this array is repeated, and an integer representing the target sum, implement a function that find whether there's a pair of numbers in the array that adds up to the target sum. Return the pair in an array. If such pair does not exist, return an empty array.

Examples:

```bash
const numbers = [2, 7, 11, 15];
const targetSum = 9;

findPairWithSum(numbers, targetSum); // Output: [2, 7]



const numbers = [3, 6, 8, 10];
const targetSum = 15;

findPairWithSum(numbers, targetSum); // Output: []
```

# Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. 
For instance, the numbers `[1, 3, 4]` form a subsequence of the array `[1, 2, 3, 4]` , and so do the numbers `[2, 4]`. Note that a single number in an array and the array itself are both valid subsequences of the array.


Sample Input

```bash
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
```

Sample Output
```bash
true
```


