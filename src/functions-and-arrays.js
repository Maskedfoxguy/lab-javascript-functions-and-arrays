// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1
  } 
  else if (num2 >= num1) {
    return num2 }
  
}
console.log(maxOfTwoNumbers(2, 8))

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot' , 'crocodile'];
longestWord = "";

function findLongestWord(array) {
if (!array.length) {
  return null;} 

  for (i = 0 ; i < array.length ; i++) {
    if (array[i].length > longestWord.length) {
       longestWord = array[i];
      }
  }
   return longestWord;
}
 console.log(findLongestWord(words))

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let total = 0
function sumNumbers(array) {
 if (array.length == 0) {
 return 0;
 }
for (i = 0 ; i < array.length ; i++) {
  total += array[i]
}
 return total
}
console.log(sumNumbers(numbers))
