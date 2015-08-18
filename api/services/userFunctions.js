module.exports = {
  findUserById: findUserById,
  findUsersByGrade: findUsersByGrade
};

function findUserById(id, res, err, callback) {
  User.findOne({ id: id }, function(err, user) {
    if(err) {
      res.serverError(err);
    }
    else {
      callback(user);
    }
  });
}

function findUsersByGrade(type, grade, res, err, callback) {
  if(type == 'boulder') {
    User.find({ boulderGrade: grade }, function(err, users) {
      if(err) {
        res.serverError(err);
      }
      else {
        callback(users)
      }
    });
  }
  else if(type == 'route') {

  }
  else {
    callback([]);
  }
}
