const express = require('express')
const dataController = require('../controllers/dataController')
const router = express.Router();

// Home
router.get("/", (req, res) => {
  dataController.getAllData(req, res);
});


module.exports = router
