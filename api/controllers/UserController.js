/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	modifyBoulderGrade: modifyBoulderGrade,
	modifyRouteGrade: modifyRouteGrade
};

function modifyBoulderGrade(req, res) {
	var b = req.body;
	User.update({ id: b.id }, { boulderGrade: b.grade }, function(err, user) {
		if(err) {
			res.serverError();
		}
		else {
			res.send(user);
		}
	});
}

function modifyRouteGrade(req, res) {
	var b = req.body;
	User.update({ id: b.id }, { routeGrade: b.routeGrade }, function(err, user) {
		if(err) {
			res.serverError();
		}
		else {
			res.send(user);
		}
	});
}
