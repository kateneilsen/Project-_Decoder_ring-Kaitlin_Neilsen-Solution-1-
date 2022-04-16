// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function encoded(input, shift) {
    input = input.toLowerCase();
    let inputArr = [...input];
    console.log(inputArr);

    let message = "";

    for (let i = 0; i < inputArr.length; i++) {
      if (alphabet.includes(inputArr[i])) {
        let index = alphabet.indexOf(inputArr[i]);
        if (shift >= 0) {
          const newIndex = (index + shift) % 26;
          message += alphabet[newIndex];
        } else {
          let newIndex = index + shift;
          if (newIndex < 0) {
            message += alphabet[newIndex + 26];
          } else {
            message += alphabet[newIndex];
          }
        }
      } else {
        message += inputArr[i];
      }
    }
    return message;
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || !shift) return false;
    if (shift < -25 || shift > 25) return false;

    if (encode) {
      return encoded(input, shift);
    } else {
      return encoded(input, -shift);
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
