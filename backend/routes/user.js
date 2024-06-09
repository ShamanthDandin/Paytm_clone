const express = require("express");

const router = express.Router();



app.post('/', (req, res) => {
    res.send('hello world')
  })



module.exports = router;