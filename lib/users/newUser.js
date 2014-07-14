var crypto = require('crypto');

function GRAVATAR(email) {
  var url = 'https://secure.gravatar.com/avatar/';
  return url + md5(email);
}

function md5(string) {
  return crypto
    .createHash('md5')
    .update(string)
    .digest('hex');
}