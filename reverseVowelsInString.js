/*
Reverse Vowels of a String:
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Constraints:
1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  let sArr = s.split("");

  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (!vowels.includes(s[leftPointer])) {
      leftPointer++;
    } else if (!vowels.includes(s[rightPointer])) {
      rightPointer--;
    } else {
      [sArr[leftPointer], sArr[rightPointer]] = [
        sArr[rightPointer],
        sArr[leftPointer],
      ];
      leftPointer++;
      rightPointer--;
    }
  }

  return sArr.join("");
};

console.log(reverseVowels("IcecreAm"));
