// Question 1
// Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

const Even_Numbers_Of_Array = (function () {
 let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
 for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
   console.log(i)
  }
 }
})

export default Even_Numbers_Of_Array;