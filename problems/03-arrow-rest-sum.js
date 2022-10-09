/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/
// take in all parameters and sums them
// use const
// use rest parameter
const arrowRestSum = (...num) =>{
  let sum = 0;
  for(let i = 0 ; i < num.length;i++){
    sum += num[i]
  }
  return sum
}



arrowRestSum(3, 5, 6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}

// let arrowRestSum = (...num) => {

// let sum=0;
//   for(let i=0; i<num.length; i++) {
//     sum =sum+num[i]
//   }
//   return sum
// }
