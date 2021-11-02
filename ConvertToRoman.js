let romanToInteger = (roman) => {
  let arr = ["I", "V", "X", "L", "C", "D", "M"];

  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  let prevIndex = 0;

  for (let i = roman.length - 1; i >= 0; i--) {

    if (arr.indexOf(roman[i]) >= prevIndex) {
      sum = sum + values[roman[i]];
    } else {
     s
      sum = sum - values[roman[i]];
    }

    prevIndex = arr.indexOf(roman[i]);
  }

  return sum;
};

console.log(romanToInteger("IV"));
console.log(romanToInteger("XIX"));
console.log(romanToInteger("CLVIII"));
console.log(romanToInteger("DXXX"));
