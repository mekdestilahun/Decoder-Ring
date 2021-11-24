// Write your tests here!

const expect = require("chai").expect;
const substitution = require("../src/substitution.js").substitution;

describe("substitution", () => {
  it("should return false if the alphabets are less than 26 characters", () => {
    const message = "message";
    const alphabet = "short";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });

  it("should include spaces, letters and special characters", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  });

  it("Should return false if the characters in the alphabet parameter are duplicating", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });

  it("should have a space between words when encoding and decoding", () => {
    const expected = " ";
    const actual = substitution("You", "are", "excellent");
    expect(actual).to.be.false;
  });

  it("Should encode messages by using the the right substitution alphabet", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });

  it("should return false if the alphabet is not 26 character", () => {
    const expected = "abcdefghijklmnopqrstuvwxyz";
    const actual = substitution("short");
    expect(actual).to.be.false;
  });
});
