// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./db');
const userRoutes = require('./user.route');

const app = express();

// Kết nối với MongoDB
connectDB();

// Middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
	res.send('hello from simple server :)');
});

app.use('/users', userRoutes);

// Lắng nghe trên cổng 3000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
