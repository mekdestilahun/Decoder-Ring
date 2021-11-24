const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!input || !alphabet || alphabet.length !== 26) return false;

    let isDuplicate = alphabet.split("").sort().join("");

    for (let i = 0; i < isDuplicate.length; i++) {
      if (isDuplicate[i] === isDuplicate[i + 1]) return false;
    }

    let alphabetCipher = [];
    if (encode) {
      for (let i = 0; i < 26; i++) {
        alphabetCipher[standardAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 26; i++) {
        alphabetCipher[alphabet[i]] = standardAlphabet[i];
      }
    }

    let result = input.toLowerCase().split("").map((character) => {
        if (character === " ") return " ";
        return alphabetCipher[character];
      });
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
