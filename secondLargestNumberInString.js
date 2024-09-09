/*
Second Largest Digit in a String:

Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:
Input: s = "dfa12321afd"
Output: 2

Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

Example 2:
Input: s = "abc1111"
Output: -1

Explanation: The digits that appear in s are [1]. There is no second largest digit.  

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and digits.
*/

const secondLargestNumInString = (s) => {
  const nums = s.replace(/[a-z]/g, "");
  let largest = -1;
  let secondLargest = -1;
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

console.log(secondLargestNumInString("abc1111"));
