// models/userModel.js
//
// Scope: The userModel.js file provides a mongoose data model for Users within the Time Zone Tracker System. It defines the user schema including relevant fields (username, password, email, zones) and incorporates methods for password security (generateHash and validPassword using bcrypt for encryption). These methods aid in the creation and validation of user credentials as part of the authentication process. The model is configured to be usable with the UserRepository and authentication controllers for handling user data.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  zones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TimeZone' }]
});
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model('User', userSchema);
module.exports = User;