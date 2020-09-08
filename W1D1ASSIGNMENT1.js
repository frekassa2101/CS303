/*1.Define a function maxOfThree() that takes three numbers as arguments and returns the
largest of them.*/
"use strict";
function maxOfThree(n1, n2, n3) {
  if (n1 >= n2 && n1 >= n3) {
    return n1;
  } else if (n2 >= n1 && n2 >= n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(maxOfThree(2, 8, 6));
/*2.Define a function sum() and a function multiply() that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
multiply([1,2,3,4]) should return 24.  */
("use strict");
let arr1 = [1, 2, 3, 4];
function productNum(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
let value = productNum(arr1);
console.log(value);
("use strict");
/* 3.Write a function findLongestWord() that takes an array of words and returns the length of
the longest one. */
function findLongestWord(arr) {
  let arrlength = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > arrlength) {
      arrlength = arr[i].arrlength;
    }
  }
  return arrlength;
}
console.log(findLongestWord(["Adonay", "Simon", "Aster", "Friatey"]));
("use strict");
/* 4. Reverse an Array
Arrays have a reverse method that changes the array by inverting the order in which its elements
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
modifies the array given as argument by reversing its elements. Neither may use the standard reverse
method.
console.log(reverseArray(["A", "B", "C"])); 
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]*/
///4a

function reverseArray(arr) {
  let temp_arr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    temp_arr[j] = arr[i];
    j++;
  }
  return temp_arr;
}
let list = ["A", "B", "C"];
console.log(reverseArray(list));
///4b
("use strict");
function reverseArrayInPlace(arr) {
  let temp_arr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    temp_arr[j] = arr[i];
    j++;
  }
  return temp_arr;
}
let arrayValue = [1, 2, 3, 4, 5];
let arrayValue2 = [5, 4, 3, 2, 1];
console.log(reverseArrayInPlace(arrayValue));
console.log(reverseArrayInPlace(arrayValue2));
("use strict");
/////function noimplimintaion needed,just answer
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
console.log(checkAge(12));
/*Rewrite the function using or '||'*/
("use strict");
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
console.log(checkAge(12))(
  /*Rewrite the function using ?*/
  "use strict"
);
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
console.log(checkAge(23))(
  /*function of min(a,b)*/
  "use strict"
);
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(2, 7));
/*function of pow(a,b)*/
("use strict");
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}
console.log(pow(4, 2));
("use strict");
/*Rewrite the arrow function*/
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution.")
);
/*is array is coped*/
("use strict");
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

console.log(fruits.length); // 4
/*Array operation*/
("use strict");
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);
/*calling in array context*/
("use strict");
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // a,b,function(){...}
console.log(arr);
/*sum input numbers*/
("use strict");
function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumInput(2));
/*Amaximam subArray*/
("use strict");
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
