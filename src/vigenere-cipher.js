const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase().replace(/[^A-Z]/g, '');

    let encryptedMessage = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let messageCharCode = message.charCodeAt(i);
      let keyCharCode = key.charCodeAt(j % key.length);
      let shift = keyCharCode - 65;
      let encryptedCharCode = ((messageCharCode + shift - 65) % 26) + 65;
      encryptedMessage += String.fromCharCode(encryptedCharCode);
      if (messageCharCode >= 65 && messageCharCode <= 90) {
        j++;
      }
    }

    return this.reverse ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase().replace(/[^A-Z]/g, '');
    key = key.toUpperCase().replace(/[^A-Z]/g, '');

    let decryptedMessage = '';
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let encryptedCharCode = encryptedMessage.charCodeAt(i);
      let keyCharCode = key.charCodeAt(j % key.length);
      let shift = keyCharCode - 65;
      let decryptedCharCode = ((encryptedCharCode - shift - 65 + 26) % 26) + 65;
      decryptedMessage += String.fromCharCode(decryptedCharCode);
      if (encryptedCharCode >= 65 && encryptedCharCode <= 90) {
        j++;
      }
    }

    return this.reverse ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
