// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];

function sum(arr1, arr2) {
  max1 = Math.max(arr1.length, arr2.length);
  const sumArray = [];

  for (let i = 0; i < max1; i++) {
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
  const max = arr.length;
  for (let i = 0; i < max - 1; i++) {
    for (let j = 0; j < max - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
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
  const x = [];

  for (let i = 0; i < arr3.length; i++) {
    x.push(arr3[i]);
  }
  for (let i = 0; i < arr4.length; i++) {
    x.push(arr4[i]);
  }
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      if (x[i] > x[j]) {
        const temp = x[i];
        x[i] = x[j];
        x[j] = temp;
      }
    }
  }
  return x;
}

console.log(merge(arr3, arr4));

// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

const a1 = [1, 2, 3, 4, 5, 6];
const a2 = [3, 4, 5, 7];

function merge2(a1, a2) {
  const y = [];

  for (let i = 0; i < a1.length; i++) {
    y.push(a1[i]);
  }

  for (let i = 0; i < a2.length; i++) {
    y.push(a2[i]);
  }

  const ans = [];
  for (let i = 0; i < y.length; i++) {
    if (!ans.includes(y[i])) {
      ans.push(y[i]);
    }
  }
  return ans;
}

console.log(merge2(a1, a2));

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

const input = '025468';

function insertDashesBetweenEven(input) {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    const x1 = input[i];
    const x2 = input[i + 1];

    output += x1;

    if (x1 % 2 === 0 && x2 % 2 === 0) {
      output += '-';
    }
  }
  return output;
}

console.log(insertDashesBetweenEven(input));

// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let mf = 1;
let m = 0;
let item;

for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[i] == array[j]) m++;
    if (mf < m) {
      mf = m;
      item = array[i];
    }
  }
  m = 0;
}

console.log(item + '  ' + mf + ' times ');
