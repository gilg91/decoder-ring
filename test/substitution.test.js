// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
  it("returns false if the given alphabet isn't exactly 26 characters long", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });
  
  it("correctly translates the given phrase, based on the alphabet given to the function.", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  
  it("returns false if there are any duplicate characters in the given alphabet", () => {
    const expected = false;
    const actual = substitution("thinkful", "asdafrwgpokl")
    expect(actual).to.equal(expected);
  });
  
  it("maintains spaces in the message, before and after encoding", () => {
    const expected = "jrufs  c pw";
    const actual = substitution("think  f ul", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  
  it("maintains spaces in the message, before and after decoding.", () => {
    const expected = "thi  n kful";
    const actual = substitution("jru  f scpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);
  });
  
  it("ignores capital letters.", () => {
    const withUpperCase = substitution("tHinKfuL", "xoyqmcgrukswaflnthdjpzibev");
    const allLowerCase = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(withUpperCase).to.equal(allLowerCase);
  });
});