const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined)
      return false;

    let cipherShift;
    encode? (cipherShift = shift): (cipherShift = 0 - shift);

    const cipherMessage = input.toLowerCase();
    let cipherArray = [];
    for (let i = 0; i < cipherMessage.length; i++) {
      const cipheringChar = cipherMessage.charCodeAt(i);
      if (cipheringChar > 122 || cipheringChar < 97) {
        cipherArray.push(cipheringChar);
      } else {
        let newCipher = cipheringChar + cipherShift;
        if (newCipher > 122) {
          cipherArray.push(newCipher - 26);
        } else if (newCipher < 97) {
          cipherArray.push(newCipher + 26);
        } else {
          cipherArray.push(newCipher);
        }
      }
    }
    return String.fromCharCode(...cipherArray);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
