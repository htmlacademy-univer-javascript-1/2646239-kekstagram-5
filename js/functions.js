/* eslint-disable no-console */
function checkLength(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

const string1 = 'abcdefgh';
const string2 = ' ';
const string3 = 'dovod';
const string4 = 'abraham';

console.log(checkLength(string1, 10));
console.log(checkLength(string2));
console.log(isPalindrome(string3));
console.log(isPalindrome(string4));
