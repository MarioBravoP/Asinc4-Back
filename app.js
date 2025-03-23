require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const data_routes = require("./routes/data");


const allowedOrigins = process.env.ALLOWED_ORIGINS;

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));


const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch(err => console.error("Error conectando a MongoDB:", err));

app.use('/', data_routes);

app.use(errorHandler);

module.exports = app;
