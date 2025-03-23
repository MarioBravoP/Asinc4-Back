const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const data_routes = require("./routes/data");


const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');

app.use(cors({
  origin: allowerOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));


const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch(err => console.error("Error conectando a MongoDB:", err));

app.use('/', data_routes);

app.use(errorHandler);

module.exports = app;
