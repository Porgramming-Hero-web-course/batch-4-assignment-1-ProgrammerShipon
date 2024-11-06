/*
   Problem 1:
   Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

   // Sample Input:
   sumArray([1, 2, 3, 4, 5]);

   // Sample Output:
   15;
*/

function sumArray(numArr: number[]) {
  return numArr.reduce((acc, curr) => acc + curr, 0);
}

const sum = sumArray([1, 2, 3, 4, 5]);
console.log("sum ", sum);
