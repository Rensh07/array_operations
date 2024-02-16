// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];

function sum(arr1, arr2) {
  const sumArray = [];

  for (let i = 0; i < 6; i++) {
    const val1 = arr1[i] || 0;
    const val2 = arr2[i] || 0;
    sumArray.push(val1 + val2);
  }
  return sumArray;
}

console.log(sum(arr1, arr2));

// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]

const arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

function ascending(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log(ascending(arr));

// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

const arr3 = [3, 5, 1];
const arr4 = [4, 2];

function merge(arr3, arr4) {
  x = arr3.concat(arr4);
  return x.sort((a, b) => a - b);
}

console.log(merge(arr3, arr4));

// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

const a1 = [1, 2, 3, 4, 5, 6];
const a2 = [3, 4, 5, 7];

function merge(a1, a2) {
  x = arr3.concat(arr4);
  return x.sort((a, b) => a - b);
}

console.log(merge(a1, a2));

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.
