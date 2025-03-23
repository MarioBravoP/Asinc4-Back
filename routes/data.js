const express = require('express')
const dataController = require('../controllers/dataController')
const router = express.Router();

// Home
router.get("/data", (req, res) => {
  dataController.getAllData(req, res);
});


module.exports = router