// images.js
const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// Muodosta yhteys tietokantaan
const db = mysql.createConnection({
  host: 'virtualitylabs.cr2ueqokwzru.eu-north-1.rds.amazonaws.com',
  user: 'masterDoer9000',
  password: 'Killermasa69',
  database: 'virtualitylabs'
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM kuva where valittu = 1';
  db.query(sql, (err, results) => {
    if (err) throw err;
   
    const images = results.map(image => {
      return Buffer.from(image.image).toString('base64');
    });
    res.json(images);
  });
});

module.exports = router;
