// Write your tests here!


const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it ("returns 'false' if the given alphabet isn't exactly 26 characters long", () => {
        expect(substitution("thinkful", "short", true)).to.be.false;
    });

    it ("correctly translates the given phrase based on the alphabet given in the function", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev", true)).to.equal('jrufscpw');
        expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal('thinkful')
    });

    it ("returns 'false' if there are any duplicate characters in the given alphabet" , () => {
        expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz", true)).to.be.false;
    });

    it ("It maintains spaces in the message, before and after encoding or decoding", () => {
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev", true)).to.equal('elp xhm xf mbymwwmfj dne');
    });

    it ("it ignores capital letters", () => {
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev", true)).to.equal('elp xhm xf mbymwwmfj dne');
    });

    it ("allows for either 'input' or 'alphabet' to have special characters", () => {
        expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
    })
});