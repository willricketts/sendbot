/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
      type: 'string',
      unique: true
    },

    password: {
      type: 'string'
    },

    firstName: {
      type: 'string'
    },

    lastName: {
      type: 'string'
    },

    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    routeGrade: {
      type: 'integer'
    },

    boulderGrade: {
      type: 'integer'
    }
  }
};
