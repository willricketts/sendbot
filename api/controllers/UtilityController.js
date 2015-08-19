/**
 * UtilityController
 *
 * @description :: Server-side logic for managing utilities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	heartbeat: heartbeat
};

function heartbeat(req, res) {
	res.send('pong!');
}
