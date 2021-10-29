// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesar", () => {
  it("should encode a message by shifting the letters", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expected);
  });
  
  it("should encode a message by a negative shift to the left", () => {
    const expected = "qefkhcri";
    const actual = caesar("thinkful", -3);
    expect(actual).to.equal(expected);
  });
  
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
  
  
  it("returns false if the shift value is equal to 0", () => {
    const expected = false;
    const actual = caesar("thinkful", 0);
    expect(actual).to.equal(expected);
  });
  
  it("returns false if the shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });
  
  it("returns false if the shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 27);
    expect(actual).to.equal(expected);
  });
  
  it("returns false if the shift value is not present", () => {
    const expected = false;
    const actual = caesar("thinkful", undefined, true);
    expect(actual).to.equal(expected);
  });
  
  it("the function ignores capital letters", () => {
    const withUpperCase = caesar("ThinkFul", 4);
    const allLowerCase = caesar("thinkful", 4);
   expect(withUpperCase).to.equal(allLowerCase);
  });
  
  it("the function handles shifts that go past the end of the alphabet", () => {
    const expected = "bbcc";
    const actual = caesar("yyzz", 3);
    expect(actual).to.equal(expected);
  });   
  
  it("the function maintains spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
    const expected = " !cde $ fgh &";
    const actual = caesar(" !abc $ def &", 2);
    expect(actual).to.eql(expected);
  });
  
  it("the function maintains spaces and other nonalphabetic symbols in the message, before and after decoding.", () => {
    const expected = " !abc $ def &";
    const actual = caesar(" !cde $ fgh &", 2, false);
    expect(actual).to.eql(expected);
  });
  
});