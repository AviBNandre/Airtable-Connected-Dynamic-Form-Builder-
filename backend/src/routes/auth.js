const express = require('express');
const router = express.Router();

router.get('/airtable/login', (req, res) => {
  res.send("Airtable login route working!");
});

module.exports = router;
