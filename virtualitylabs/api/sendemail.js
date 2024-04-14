const nodemailer = require("nodemailer");
var express = require('express');
var app = express();
var bodyParser =require('body-parser');
var mysql = require('mysql');



const db = mysql.createConnection({
    host: 'virtualitylabs.cr2ueqokwzru.eu-north-1.rds.amazonaws.com',
    user: 'masterDoer9000',
    password: 'Killermasa69',
    database: 'virtualitylabs'
  });

app.use(bodyParser.json());

console.log("Aloitetaan");

var cors = function (req, res, next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(cors);



//const router = express.Router();


app.get('/api/images', (req, res) => {
    const sql = 'SELECT * FROM kuva where valittu = 1';
    db.query(sql, (err, results) => {
      if (err) throw err;
     
      const images = results.map(image => {
        return Buffer.from(image.image).toString('base64');
      });
      res.json(images);
    });
  });


app.post('/api/sendEmail', async(req,res) => {
    
    console.log("/contact:", req.body);


    const { name, email, phoneNumber, message } = req.body;
    let query = `INSERT into yhteyslomake (nimi, email, puhnro, viesti) values (?, ?, ?, ?)`;

    db.query(query, [name, email, phoneNumber, message], function(error, result, fields){

        console.log("done")
        if  (error)
        {
            console.log("virhe");
            res.json({status : "NOT OK", msg : error});
        }
        else
        {
            res.statusCode = 200;
            res.json(result);
        }
        console.log("Kysely tehty");
    })
    
    try {
        // Extract form data from request body
        const { name, email, phoneNumber, message } = req.body;
    
        // Your logic to send email using nodemailer
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "labsvirtuality@gmail.com", // Use environment variable for email
                pass: 'vgwlepcilwffgdnd'  // Use environment variable for password
            }
        });
    
        // Email options
        const mailOptions = {
            from: 'labsvirtuality@gmail.com',
            to: 'labsvirtuality@gmail.com',
            subject: 'Contact Message',
            text:  `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`
        };
    
        // Send mail
        await transporter.sendMail(mailOptions);
    
        // Sending response
        //res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        console.log({ error: 'Error sending email' });
      }
})

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app