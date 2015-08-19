var bcrypt = require('bcrypt');

module.exports = {
  hashPassword: hashPassword,
  verifyPassword: verifyPassword
}

function hashPassword(prehash, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    if(err) {
      callback(new Error(err));
    }
    else if(salt) {
      bcrypt.hash(prehash, salt, function(err, hash) {
        if(err) {
          callback(new Error(err));
        }
        else if(hash) {
          callback(hash);
        }
        else {
          callback(new Error('Password hashing failed somewhere, somehow'));
        }
      });
    }
    else {
      callback(new Error('Salt was unhandled'));
    }
  });
}

function verifyPassword(hash, callback) {

}
