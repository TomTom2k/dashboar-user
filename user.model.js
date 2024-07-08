// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	role: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	password: { type: String, required: true },
	profilePic: { type: String, required: false },
});

module.exports = mongoose.model('User', UserSchema);
