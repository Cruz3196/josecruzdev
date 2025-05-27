const dotenv = require('dotenv');
dotenv.config();


const express = require ('express');
const app = express(); 
const path = require('path');
const PORT = process.env.PORT || 5001;
const nodemailer = require('nodemailer');

//Middleware
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.post('/', (req,res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_USER,
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('Error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('Success');
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})