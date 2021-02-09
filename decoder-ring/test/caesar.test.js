
// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar", () => {
    it ("should return false if the shift value is equal to 0, less than -25, greater than 25 or not present", () => {

       expect(caesar("thinkful")).to.be.false;
       expect(caesar("thinkful", 99)).to.be.false;
       expect(caesar("thinkful", -26)).to.be.false;
       
    })

    it ("ignores capital letters", () => {
        expect(caesar("This is a secret message!", 8, true)).to.equal('bpqa qa i amkzmb umaaiom!');
        expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal('this is a secret message!');

    })

    it ("should shift the letters of an 'input' sentence according to the value of a 'shift' parameter based on a typical alphabetic order", () => {
        expect(caesar("thinkful", 3, true)).to.equal('wklqnixo');
        expect(caesar("thinkful", -3, true)).to.equal('qefkhcri');
    })

    it ("should decode the message if the value of 'encode' is set to 'false'", () => {
        expect(caesar("wklqnixo", 3, false)).to.equal('thinkful');
    })

    it ("should mantain spaces and non-alphabetic symbols throughout", () => {
        expect(caesar("what-a beautiful_day!", 8, true)).to.equal("epib-i jmicbqnct_lig!");
    })

    it ("should wrap around the alphabet if a shifted letter goes 'off' the alphabet", () => {
        expect(caesar("zanzibar", 9, true)).to.equal("ijwirkja");
    })
});



