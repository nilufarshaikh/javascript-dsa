/*
Power Set of Array:
Given an array of integers, write a function subsets(nums) that returns all possible subsets (the power set) of the input array nums. The function should use recursion to generate the subsets.

Example Input: subsets([1, 2, 3])
Example Output:
[[], [1], [1, 2], [1, 2, 3] [1, 3], [2], [2, 3], [3]]
*/

function subsets(nums) {
  let result = [];
  let temp = [];

  function recursiveSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }

  recursiveSubsets(nums, 0);
  return result;
}

console.log(subsets([1, 2, 3]));
