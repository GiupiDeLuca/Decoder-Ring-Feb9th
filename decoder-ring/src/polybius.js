// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    const alphabet = `abcdefghjklmnopqrstuvwxyz`
    let result = ""

    if (encode === true) {

      const lowerInput = input.toLowerCase();


      for (let j = 0; j < lowerInput.length; j++) {
        const index = alphabet.indexOf(lowerInput[j]);
        if ((index >= 0) && (index < 5)) result += `${index+1}1` 
        if ((index >= 5) && (index < 10) && (index !== 8)) result += `${index-4}2`
        if ((index >= 10) && (index < 15)) result += `${index%5 +1}3`
        if ((index >= 15) && (index < 20)) result += `${index%5 +1}4`
        if (index >= 20) result += `${index%5 +1}5`
        if (lowerInput[j] === ' ') result += lowerInput[j];
        if (lowerInput[j] === 'i' || lowerInput[j] === 'j') result += '42'
      }
    }

    if (encode === false) {

      const joinedInput = input.split(' ').join('')
      if (joinedInput.length % 2 !== 0) return false;

      let newInput = input.split('');


      for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] !== " ") {
        newInput[i] += newInput[i+1];
        newInput.splice(i+1, 1);
        }
      }

      newInput.forEach((pair) => {

        if(pair === " ") result += pair
        if (pair == 42) result += '(i/j)'
        if (pair[1] == 1) result += alphabet[pair[0]-1]
        if (pair[1] == 2 && pair != 42) result += alphabet[parseInt(pair[0])+4]
        if (pair[1] == 3) result += alphabet[parseInt(pair[0])+9]
        if (pair[1] == 4) result += alphabet[parseInt(pair[0])+14]
        if (pair[1] == 5) result += alphabet[parseInt(pair[0])+19]

      })



    }

    return result; 


  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
