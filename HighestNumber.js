function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {
    // check if the character is at that position
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

let string = "absaaab";
let highestFrequency = "a";

const result = countString(string, highestFrequency);

console.log("The “a” has the highest frequency of " +result);
