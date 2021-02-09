// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

  

    const lowerInput = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';

    for (let i = 0; i < lowerInput.length; i++) {

      const letter = lowerInput[i];

      if ((!alphabet.includes(letter)) || (letter === " ")) {
        newStr += letter
        continue
      }
    
      const currentIndex = alphabet.indexOf(letter);

      encode === true ? newIndex = currentIndex + shift : newIndex = currentIndex - shift

      if (newIndex > 25) newIndex = newIndex - 26;
    
      if (newIndex < 0) newIndex = newIndex + 26;

      newStr += alphabet[newIndex]
    
    }

    return newStr;

  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
