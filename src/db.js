const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://ngthanhtin68:Tin1842003%40@cluster0.teb8bvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/dashboard'
		);
		console.log('MongoDB connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
