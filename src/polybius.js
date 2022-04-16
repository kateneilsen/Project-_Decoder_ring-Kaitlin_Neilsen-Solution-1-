// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encodingSquare = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    "i/j": 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  const decodingSquare = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function encodePolybius(input, encode = true) {
    input = input.toLowerCase();
    const inputArr = [...input];
    let message = "";
    for (let i = 0; i < inputArr.length; i++) {
      const inputChar = inputArr[i];
      if (inputChar === " ") message += inputChar;
      if (inputChar == "i" || inputChar == "j") message += "42";
      for (let letter in encodingSquare) {
        if (letter === inputChar) {
          message += encodingSquare[letter];
        }
      }
    }
    return message;
  }

  function decodePolybius(input) {
    let newInput = input.replace(/ /g, "00");
    if (newInput.length % 2 != 0) return false;
    let inputArray = newInput.match(/../g);

    let message = "";
    for (let i = 0; i < inputArray.length; i++) {
      const inputChar = inputArray[i];
      if (inputChar === "00") message += " ";
      for (let number in decodingSquare) {
        if (inputChar === number) {
          message += decodingSquare[number];
        }
      }
    }
    return message;
  }

  function polybius(input, encode = true) {
    // your solution code here

    if (encode) {
      return encodePolybius(input);
    } else {
      return decodePolybius(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
