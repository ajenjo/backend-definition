/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    user: {
      required: true,
      type: 'string',
      unique: true,
    },

    password: {
      required: true,
      type: 'string',
    },

    typePassword: {
      defaultsTo: 'encrypt',
      enum: ['encrypt', 'literal'],
      type: 'string',
    },

    name: {
      type: 'string',
    },

    lastname: {
      type: 'string',
    },

    email: {
      required: true,
      type: 'email',
      unique: true,
    },

    /***************************************************************************
    * Define si es valido el usuario. De ser falso no se puede acceder la      *
    * cuenta.                                                                  *
    ***************************************************************************/
    status: {
      defaultsTo: false,
      type: 'boolean',
    },

    sessions: {
      collection: 'sessions',
      via: 'user',
    },

    groups: {
      collection: 'group',
      via: 'users',
    },

    permissions: {
      collection: 'permission',
      via: 'users',
    },

  }, // End Attributes

  /*****************************************************************************
  * Return True or False si la contraseña ingresada coincide con el usuario.   *
  *****************************************************************************/
  validatePassword: function (user, password) {
    return passwordService.verific(user.typePassword, password, user.password);
  },

  findWithPassword: function (query, cb) {
    var ownCallBack, passwordDetect;

    passwordDetect = query.password || query.pass;

    ownCallBack = function (err, user) {
      if (err) {
        cb(err);
      } else {
        // Sin herror.
        if (user) {
          // Con usuario

          // Validando la contraseña
          if (User.validatePassword(user, passwordDetect)) {
            cb(null, user);
          } else {
            cb(null, null);
          }
        } else {
          // Sin Usiario
          cb(null, null);
        }
      }
    };

    User.findOne(query).exec(ownCallBack);
  },

};

