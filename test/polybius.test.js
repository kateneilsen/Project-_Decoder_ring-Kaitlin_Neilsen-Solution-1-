// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("should encode the letters i and j to 42", () => {
    const actual = polybius("thinkful", (encode = true));
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to (i/j)", () => {
    const actual = polybius("42", false);
    const expected = "(i/j)";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = polybius("H");
    const expected = polybius("h");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces when encoding", () => {
    const actual = polybius("a a");
    const expected = "11 11";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces when decoding", () => {
    const actual = polybius("11 11", false);
    const expected = "a a";
    expect(actual).to.equal(expected);
  });
});
