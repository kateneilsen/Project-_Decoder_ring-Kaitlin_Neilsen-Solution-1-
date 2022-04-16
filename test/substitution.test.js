// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase, based on the given alphabet", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabc");
    const expected = false;
    expect(actual).to.be.false;
  });
  it("should maintain spaces when encoding", () => {
    const actual = substitution(
      "you are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when decoding", () => {
    const actual = substitution(
      "rmwwl ilhwq",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const actual = substitution("T");
    const expected = substitution("t");
    expect(actual).to.equal(expected);
  });
});
