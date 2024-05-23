const express = require('express');
const mongoose = require('mongoose');
const inventoryRouter = require('./routes/inventory');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Set up static files
app.use(express.static('public'));

// Routes
app.use('/inventory', inventoryRouter);

// Root route handler
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});