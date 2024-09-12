/*
Longest Palindromic Substring:
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

// Best solution with O(n)**2 time complexity
var longestPalindrome = function (s) {
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return s.slice(left + 1, right);
  };

  if (s.length === 0) return "";

  let longestSubStr = "";

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expandAroundCenter(i, i);
    if (oddPalindrome.length > longestSubStr.length) {
      longestSubStr = oddPalindrome;
    }

    const evenPalindrome = expandAroundCenter(i, i + 1);
    if (evenPalindrome.length > longestSubStr.length) {
      longestSubStr = evenPalindrome;
    }
  }

  return longestSubStr;
};

console.log(longestPalindrome("babad"));
