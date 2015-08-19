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

function verifyPassword(email, prehash, callback) {
  User.findOne({ email: email }, function(err, user) {
    if(err) {
      callback(new Error(err));
    }
    else if(user) {
      hashPassword(prehash, function(hash) {
        if(hash == user.password) {
          callback(true);
        }
        else {
          callback(false);
        }
      });
    }
    else {
      callback(new Error('Somehow a user wasn't found));
    }
  })
}
