const crypto = require('crypto');

function encryptPassword(password) {
  const encrypt = crypto.createHash('sha1');
  encrypt.update(password);
  const finalEncrypt = encrypt.digest('hex');
  console.log(finalEncrypt);
  return finalEncrypt;
}

module.exports = encryptPassword;