const { NotImplementedError } = require("../extensions/index.js");

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
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    if (!this.isDirect) {
      message = message.split("").reverse().join("");
      key = key.toUpperCase();
    } else {
      message = message.toUpperCase();
      key = key.toUpperCase();
    }
    const maxlength = message.length;
    let result = "";
    let j = 0;
    for (let i = 0; i < maxlength; i++) {
      const currentChar = message[i >= message.length ? i % message.length : i];
      if (!this.alphabet.includes(currentChar)) {
        result += currentChar;
      } else {
        const messageIndex = this.alphabet.indexOf(currentChar);
        const ki_s = key[j >= key.length ? j % key.length : j];
        let ki = this.alphabet.indexOf(ki_s);
        const c =
          this.alphabet[
            (this.alphabet.length + (messageIndex + ki)) % this.alphabet.length
          ];
        result += c;
        j++;
      }
    }
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    if (!this.isDirect) {
      message = message.split("").reverse().join("").toUpperCase();
      key = key.toUpperCase();
    } else {
      message = message.toUpperCase();
      key = key.toUpperCase();
    }
    const maxlength = Math.max(message.length);
    let result = "";
    let j = 0;
    for (let i = 0; i < maxlength; i++) {
      const currentChar = message[i >= message.length ? i % message.length : i];

      if (!this.alphabet.includes(currentChar)) {
        result += currentChar;
      } else {
        const messageIndex = this.alphabet.indexOf(currentChar);
        const ki_s = key[j >= key.length ? j % key.length : j];
        let ki = this.alphabet.indexOf(ki_s);

        const c =
          this.alphabet[
            (this.alphabet.length + messageIndex - ki) % this.alphabet.length
          ];
        result += c;
        j++;
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
