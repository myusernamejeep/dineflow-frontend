// Load environment variables from .env file
require('dotenv').config();

const express = require('express'); 
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;
  
// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.static('public')); // Serve static files from public directory
 

// Serve main application
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Serve admin panel
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/admin.html');
});

// Serve test page
app.get('/payment-success', (req, res) => {
    res.sendFile(__dirname + '/public/payment-success.html');
}); 

// This is for Vercel deployment: wrap the Express app in a serverless function
// Vercel expects a file named `api/index.js` (or similar) that exports the app.
// For local development, `app.listen` is used. For Vercel, it uses the exported `app`.
if (process.env.VERCEL_ENV === 'production' || process.env.VERCEL_ENV === 'development') {
    // If running on Vercel, export the app directly
    module.exports = app;
} else {
    // For local development, start the server normally
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`To run the frontend prototype, ensure it targets http://localhost:${PORT}`);
    });
}
 