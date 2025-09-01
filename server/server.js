const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require('./routes/users');
const {User} = require('./models/user');

const PORT = process.env.PORT || 5000;

app.use('/api/users', userRoutes);
// connect to db
db();

// API routes

app.get('/', (_req, res) => {
    res.status(200).send('API is running...');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});