// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

   
   if (!alphabet || alphabet.length !== 26) return false;
  
    const alpha = alphabet.split('');

    const hasDuplicate = alpha.some((val, i) => alpha.indexOf(val) !== i);
    if (hasDuplicate) return false;

    const lowerInput = input.toLowerCase();
    let result = "";

    const regularAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < lowerInput.length; i++) {

      const currentLetter = lowerInput[i];

      if (currentLetter === " ") {
        result += currentLetter;
        continue
      }

      if (encode === true) {
        const currentIndex = regularAlphabet.indexOf(currentLetter);

        result += alpha[currentIndex]

      }   else {
        const currentIndex = alpha.indexOf(currentLetter)

        result += regularAlphabet[currentIndex]
      } 
    }

    return result;

  };

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
