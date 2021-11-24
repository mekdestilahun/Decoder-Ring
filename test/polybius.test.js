const expect = require("chai").expect;
const polybius = require("../src/polybius.js").polybius;

describe("polybius", () => {
  it("Should encode a message by translating each letter into numbers", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });

  it("should have a space between words when encoding", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("hello world");
    expect(actual).to.equal(expected);
  });

  it("should have a space between words when encoding and decoding", () => {
    const expected = "my message";
    const actual = polybius("2345 23513434112251", false);
    expect(actual).to.equal(expected);
  });

  it("When encoding, both the letters 'i' and 'j' should be translated to 42", () => {
    const expected = "4432(42/42)3352125413";
    const actual = polybius("th(i/j)nkful");
    expect(actual).to.equal(expected);
  });

  it("should decode a message by translatin the numbers into letters", () => {
    const expected = "message";
    const actual = polybius("23513434112251", false);
    expect(actual).to.equal(expected);
  });
});
