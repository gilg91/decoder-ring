// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    let str = input.toLowerCase();
    let result = "";
    if (encode === false) {
      shift *= -1;
    }
    for (let i = 0; i < str.length; i++) {
      let unicode = str[i].charCodeAt();
      if (unicode < 97 || unicode > 122) {
        result += str[i];
        continue;
      }
      if (unicode > 122 - shift) {
        unicode -= 26;
      }
      if (unicode < 97 - shift) {
        unicode += 26;
      }
      result += String.fromCharCode((unicode) + shift);
    }
    return result;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
