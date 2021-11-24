// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe ("caesar", () => {
    it("should return false if shift value is not present", () => {
        const expected = false;
        const actual = caesar("Thinkful", 0)
        expect(actual).to.equal(expected)
    });

    it("should return false if shift value is less than 25", () => {
        const expected = "vjkpmhwn";
        const actual = caesar("Thinkful", -24);
        expect(actual).to.equal(expected);
    })

    it("should return false if the value of shift is greater than 25", () => {
        const expected = "sghmjetk";
        const actual = caesar("Thinkful", 25);
        expect(actual).to.equal(expected);
    });

    it("should have a space between words when encoding", () => {
        const expected = " ";
        const actual = caesar(" ", "i", "!", 8);
        expect(actual).to.equal(expected);
    });

    it("should ignore capitalization of letters when encoding and decoding", () => {
        const message = "A Message";
        const shift = 8;
        const actual = caesar(message, shift);
        const expected = "i umaaiom";
  
        expect(actual).to.equal(expected);

    });

    it("should maintain non-alphabetic symbols", () => {
        let input = "caesar"
        let shift = 3;
        const expected = "fdhvdu";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })

    it("should return the correct encoded message", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    })

    it("when decoding it should return the correct message", () => {
        const expected = "this is a secret message";
        const actual =caesar("BPQA qa I amkzmb umaaiom", 8, false);
        expect(actual).to.equal(expected);
    })
})


