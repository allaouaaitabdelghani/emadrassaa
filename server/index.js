const express = require('express');
const path = require('path');
const cors = require('cors');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Sample API route
app.get('/api/user', (req, res) => {
  // This would typically fetch from a database
  res.json({
    firstName: 'Hicham',
    lastName: 'Khenfer',
    email: 'khenferhicham@gmail.com',
    school: 'emadrassati school'
  });
});

// All other GET requests not handled before will return the React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});