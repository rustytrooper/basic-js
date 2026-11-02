const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(encryptedMessage, key, 'decrypt');
  }

  process(message, key, mode) {
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let keyIndex = 0;
    let result = '';

    for (let i = 0; i < messageUpper.length; i += 1) {
      const ch = messageUpper[i];
      const code = ch.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        const keyCode = keyUpper[keyIndex % keyUpper.length].charCodeAt(0) - 65;
        const shift = mode === 'encrypt' ? keyCode : -keyCode;
        const newCode = ((code - 65 + shift + 26) % 26) + 65;
        result += String.fromCharCode(newCode);
        keyIndex += 1;
      } else {
        result += ch;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
