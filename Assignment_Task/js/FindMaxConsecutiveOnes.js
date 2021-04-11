const FindMaxConsecutiveOnes = (nums => {
 let maxCount = 0;
 let count = 0;
 for (let i in nums) {
  count = nums[i] === 1 ? count + 1 : 0;
  if (count > maxCount) {
   maxCount = count;
  }
 }
 return `Max num of consecutive 1's is ${maxCount}`;
})
export default FindMaxConsecutiveOnes;