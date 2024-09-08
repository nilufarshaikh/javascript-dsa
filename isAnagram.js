/*
Valid Anagram:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 10**4
s and t consist of lowercase English letters.
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

// Other solution:
// const isAnagram = (s, t) => {
//   if (s.length !== t.length) return false;

//   return s.split("").sort().join("") === t.split("").sort().join("");
// };

const result = isAnagram("care", "race");
console.log(result);
