const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware to parse JSON
app.use(express.json());

// --- API route for contact form ---
app.post('/api/send-email', (req, res) => {
    const { email, subject, message } = req.body;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use STARTTLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${email}: ${subject}`,
    text: message,
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Email error:', error);
        return res.status(500).send('Failed to send email');
        }
    console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

// --- Serve frontend in production ---
if (process.env.NODE_ENV === 'production') {
    const frontendPath = path.join(__dirname, '../frontend/dist');
    app.use(express.static(frontendPath));

  // Serve index.html for any unknown routes
    app.get('/', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
    } else {
    // Simple message when not in production
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

// --- Start server ---
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
