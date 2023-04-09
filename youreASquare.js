/* Task
Given an integral number, determine if it's a square number */

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }

let result = isSquare(9);
console.log(result);