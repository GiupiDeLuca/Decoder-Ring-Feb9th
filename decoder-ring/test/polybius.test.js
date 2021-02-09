
// Write your tests here!

const expect = require("chai").expect;
const polybius = require ("../src/polybius");

describe("polybius", () => {
    it ("should translate the letters 'i' and 'j' to 42 when encoding", () => {
        expect(polybius("thinkful")).to.equal("4432423352125413")
    });

    it ("should translate 42 to '(i/j)' when decoding", () => {
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful")
    });

    it ("should ignore capital letters", () => {
        expect(polybius("Hello world")).to.equal('3251131343 2543241341')
    });

    it ("should mantain spaces in the message when encoding and decoding", () => {
        expect(polybius("Hello world")).to.equal('3251131343 2543241341')
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world")
    });

    it ("should take in an even number of characters when decoding, excluding spaces, otherwise it should return 'false'", () => {
        expect(polybius("44324233 521254134", false)).to.be.false;
    });
});