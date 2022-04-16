// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it(" should return false if the shift value is 0 or not present", () => {
    const input = "thinkful";
    const shift = 0;
    const encode = true;

    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return false if the shift value is less than -25", () => {
    const input = "thinkful";
    const shift = -30;
    const encode = true;

    const expected = false;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is greater than 25", () => {
    const input = "thinkful";
    const shift = 30;
    const encode = true;

    const expected = false;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is greater than 25", () => {
    const input = "thinkful";
    const shift = -26;
    const encode = true;

    const expected = false;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });

  it("it should decode the inputted text while maintaining spaces and other nonalphabetic symbols", () => {
    const test = "b c!";
    const expected = "a b!";
    const actual = caesar(test, 1, false);
    expect(actual).to.equal(expected);
  });

  it("it should encode the inputted text while maintaining spaces and other nonalphabetic symbols", () => {
    const test = "a b!";
    const expected = "b c!";
    const actual = caesar("a b!", 1);
    expect(actual).to.equal(expected);
  });

  it("it should ignore capital letters", () => {
    const testInput = "A";
    const expected = "b";
    const actual = caesar("A", 1);
    expect(actual).to.equal(expected);
  });

  it("it should handle shifts that go past the end of the alphabet", () => {
    const test = "z";
    const expected = "a";
    const actual = caesar("z", 1);
    expect(actual).to.equal(expected);
  });

  it("it should handle shifts that go left past the start of the alphabet", () => {
    const test = "a";
    const expected = "z";
    const actual = caesar("a", -1);
    expect(actual).to.equal(expected);
  });
});
