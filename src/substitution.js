// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function unique(alphabet) {
    return new Set(alphabet).size == alphabet.length;
  }

  function encoder(input, alphabet) {
    if (!alphabet) return false;
    let uniqueTest = unique(alphabet);
    if (!uniqueTest) return false;
    if (alphabet.length !== 26) return false;
    input = input.toLowerCase();
    const inputArr = [...input];

    let message = "";

    for (let i = 0; i < inputArr.length; i++) {
      const inputChar = inputArr[i];
      if (realAlphabet.includes(inputChar)) {
        let index = realAlphabet.indexOf(inputChar);
        message += alphabet[index];
      } else {
        message += inputChar;
      }
    }
    return message;
  }

  function decoder(input, alphabet) {
    if (!alphabet) return false;
    let uniqueTest = unique(alphabet);
    if (!uniqueTest) return false;
    if (alphabet.length !== 26) return false;
    input = input.toLowerCase();
    const inputArr = [...input];

    let message = "";

    for (let i = 0; i < inputArr.length; i++) {
      const inputChar = inputArr[i];
      if (alphabet.includes(inputChar)) {
        let index = alphabet.indexOf(inputChar);
        message += realAlphabet[index];
        console.log(realAlphabet[index]);
      } else {
        message += inputChar;
      }
    }
    return message;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (encode) {
      return encoder(input, alphabet);
    } else {
      return decoder(input, alphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
