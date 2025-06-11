const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://sojitram124:INvC0gQQr9A9yTRY@portfolio.hoeya0z.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfolio',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Define schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to save contact info
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// (Optional) Get all contacts
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
