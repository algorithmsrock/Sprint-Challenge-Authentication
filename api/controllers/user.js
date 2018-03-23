const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

 /* Sends the given err, a string or an object, to the client. Sets the status
   * code appropriately. */

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
     const user = new User ({ username, password});
		 user.save((err, user) => {
				if (err) return res.send(err);
				res.json({
         success: 'User successfully saved',
				 user
				});
  });
};
module.exports = {
  createUser
};
