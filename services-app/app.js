const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Dummy service data
const services = [
    {
        title: 'Web Development',
        description: 'We build modern, scalable, and fast web applications tailored to your business.',
        icon: '🌐'
    },
    {
        title: 'Mobile App Development',
        description: 'Cross-platform iOS and Android apps with native performance.',
        icon: '📱'
    },
    {
        title: 'UI/UX Design',
        description: 'Beautiful and intuitive designs focused on user experience.',
        icon: '🎨'
    },
    {
        title: 'Cloud Solutions',
        description: 'Deploy, scale, and manage your services in the cloud.',
        icon: '☁️'
    },
    {
        title: 'DevOps & Automation',
        description: 'CI/CD pipelines, infrastructure automation, and system reliability.',
        icon: '⚙️'
    },
    {
        title: 'SEO Optimization',
        description: 'Rank higher in search engines and boost your online presence.',
        icon: '🚀'
    }
];

// Routes
app.get('/', (req, res) => {
    res.redirect('/services');
});

app.get('/services', (req, res) => {
    res.render('services', { services });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
