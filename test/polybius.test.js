// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const expected = "23513434112251";
    const actual = polybius("message");
    expect(actual).to.equal(expected);
  });
  
  it("When encoding, the function translates the letters i and j to 42", () => {
    const expected = "42424242";
    const actual = polybius("ijij");
    expect(actual).to.equal(expected);
  });
  
  it("When decoding, it translates 42 to (i/j)", () => {
    const expected = "(i/j)(i/j)(i/j)";
    const actual = polybius("424242", false);
    expect(actual).to.equal(expected);
  });
  
  it("the function ignores capital letters.", () => {
    const withUpperCase = polybius("A Message");
    const withLowerCase = polybius("a message");
    expect(withUpperCase).to.equal(withLowerCase);
  });
  
  it("the function maintains spaces in the message, before and after encoding", () => {
    const expected = "   112142422111  ";
    const actual = polybius("   abijba  ");
    expect(actual).to.equal(expected);
  });
  
  it("the function maintains spaces in the message, before and after decoding.", () => {
    const expected = "   ab(i/j)(i/j)ba  ";
    const actual = polybius("   112142422111  ", false);
    expect(actual).to.equal(expected);
  });
  
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
    const expected = false;
    const actual = polybius("212 325113134 2543241341", false);
    expect(actual).to.equal(expected);
  });
});