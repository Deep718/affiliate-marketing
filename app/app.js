const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Dummy services data
const services = [
    { name: 'Web Development', description: 'Modern and responsive websites.' },
    { name: 'App Development', description: 'Cross-platform mobile applications.' },
    { name: 'UI/UX Design', description: 'Beautiful, user-friendly interfaces.' },
    { name: 'SEO Optimization', description: 'Improve your site’s visibility.' }
];

// Route for services page
app.get('/services', (req, res) => {
    res.render('services', { services });
});

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Our Company</h1><p><a href="/services">View Our Services</a></p>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
