// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('./user.model');

router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.post('/', async (req, res) => {
	const {
		email,
		role,
		phoneNumber,
		firstName,
		lastName,
		password,
		profilePic,
	} = req.body;

	const user = new User({
		email,
		role,
		phoneNumber,
		firstName,
		lastName,
		password,
		profilePic,
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json(updatedUser);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.json({ message: 'User deleted' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
