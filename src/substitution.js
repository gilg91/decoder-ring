// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length != 26) return false;
    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();
    let set = new Set();
    let index = 0;
    while (index < 26) {
      if (set.has(alphabet[index])) {
        return false;
      } else {
        set.add(alphabet[index]);
      }
      index++;
    }
    
    let result = "";
    const standard = "abcdefghijklmnopqrstuvwxyz";
    
    
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " "){
          result += " ";
          continue;
        }
      let idx = standard.indexOf(input[i]);
      let res = alphabet.charAt(idx);
      result += res;
      }
    } else {
      for (let i = 0; i < input.length; i++) {
      if (input[i] === " "){
        result += " ";
        continue;
      }
      let idx = alphabet.indexOf(input[i]);
      let res = standard.charAt(idx);
      result += res;
      }
    }
    
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
