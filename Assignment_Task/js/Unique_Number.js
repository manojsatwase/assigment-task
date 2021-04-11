// Question 3
// Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

const Unique_Number = (function () {
 let arr = [1, 1, 3, 4, 5, 5, 6, 7, 8, 9, 10]
 // let sorted = arr.sort();
 let newArr = [];
 for (let i = 0; i < arr.length; i++) {
  if (arr[i + 1] === arr[i]) {
   newArr.push(arr[i])
  }
 }
 return newArr;
})
export default Unique_Number;