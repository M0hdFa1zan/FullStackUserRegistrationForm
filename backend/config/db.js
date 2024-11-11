const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;
