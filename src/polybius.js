// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const str = input.toLowerCase();
    const pSquare = {
      'a': '11',
      'b': '21',
      'c': '31',
      'd': '41',
      'e': '51',
      'f': '12',
      'g': '22',
      'h': '32',
      'i': '42',
      'j': '42',
      'k': '52',
      'l': '13',
      'm': '23',
      'n': '33',
      'o': '43',
      'p': '53',
      'q': '14',
      'r': '24',
      's': '34',
      't': '44',
      'u': '54',
      'v': '15',
      'w': '25',
      'x': '35',
      'y': '45',
      'z': '55',
    }
    let result = "";
    if (encode) {
      for (let i  = 0; i < str.length; i++) {
        if (!pSquare[str[i]]) {
          result += str[i];
          continue;
        }
        result += pSquare[str[i]];
      }
    } else {
//    When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.     
      let len = 0;
      for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1  && str[i] != " ") {
          len++;
          if (len % 2 != 0) {
            return false;
          }
        }
        if (str[i] === " ") {
          if (len % 2 != " ") {
            return false;
          }
        } else {
          len++;
        }
      }
      
      
      console.log(input);
      let count = 0;
      let i = 0;
      while (i < str.length) {
        if (str[i] === " ") {
          result += str[i];
          i++;
          continue;
        }
        let tempStr = str[i] + str[i + 1];
        if (tempStr === "42") {
          result += "(i/j)";
        } else {
          result += getKeyByValue(pSquare, tempStr);  
        }
        i += 2;
      }
      
    }
    return result;
  }
    

  return {
    polybius,
  };
})();

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

module.exports = { polybius: polybiusModule.polybius };

