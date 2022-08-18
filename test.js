const encrypt = require("asymmetric-encryption")

const { publicKey, privateKey, passphrase } = encrypt.generateKeyPairSync();
const message = "message";

const enc = encrypt.encrypt(publicKey, message);
const dec = encrypt.decrypt(privateKey, enc);

console.log(publicKey)
console.log(privateKey)
console.log(passphrase)
console.log(dec)