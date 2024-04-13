const express = require("express");
const router = express.Router();

console.log("emailRoutes");
const { sendEmail } = require("../sendemail");

router.post("http://localhost:3001/api/sendEmail", sendEmail);



module.exports = router;