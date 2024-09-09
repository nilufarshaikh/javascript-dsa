/*
Second Largest Number:

Return the second largest number in the array.

Example 1:
Input: nums = [3, 5, 1, 2, 4]
Output: 4

Explanation:
The largest number is 5, and the second largest number is 4.

Example 2:
Input: nums = [10, 10, 5, 2]
Output: 5

Explanation:
The largest number is 10, and the second largest number is 5 (even though 10 is repeated).

Constraints:
2 <= nums.length <= 1000
-10^9 <= nums[i] <= 10^9
*/

const secondLargestNumber = (nums) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    } else if (nums[i] !== largest && nums[i] > secondLargest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
};

console.log(secondLargestNumber([2, 5, 3, 8, 9, 11]));
console.log(secondLargestNumber([10, 5, 10]));
