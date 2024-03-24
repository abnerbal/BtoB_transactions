const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

// Hardcoded businesses for demonstration
let businesses = [
    { name: "Tech Innovations", about: "Leading in AI and robotics.", tags: ["AI", "Robotics"], industry: "Manufacturing", email: "contact@techinnovations.com" },
    { name: "Machine Masters", about: "Advanced machinery for manufacturing.", tags: ["Machinery", "Manufacturing"], industry: "Manufacturing", email: "info@machinemasters.com" },
    { name: "Event Caterers", about: "Catering services for all events.", tags: ["Food", "Service"], industry: "Catering", email: "info@eventcaterers.com" },
    { name: "Gourmet Paradise", about: "Exquisite catering and event services.", tags: ["Gourmet", "Events"], industry: "Catering", email: "contact@gourmetparadise.com" },
    { name: "Design Studio", about: "Graphic design and branding.", tags: ["Design", "Branding"], industry: "Graphic Design", email: "studio@design.com" },
    { name: "Creative Minds", about: "Innovative graphic design services.", tags: ["Creativity", "Innovation"], industry: "Graphic Design", email: "ideas@creativeminds.com" },
    { name: "Web Solutions", about: "Full-stack web development services.", tags: ["Web", "Development"], industry: "Web Design", email: "solutions@web.com" },
    { name: "Code Crafters", about: "Crafting beautiful websites and applications.", tags: ["Coding", "Web Design"], industry: "Web Design", email: "craft@codecrafters.com" },
    { name: "Finance Advisors", about: "Expert financial planning services.", tags: ["Finance", "Advisory"], industry: "Financial Services", email: "advice@financeadvisors.com" },
    { name: "Invest Smart", about: "Smart investment solutions for everyone.", tags: ["Investment", "Finance"], industry: "Financial Services", email: "invest@investsmart.com" },
    { name: "Build It Right", about: "Quality construction services.", tags: ["Construction", "Architecture"], industry: "Construction", email: "contact@builditright.com" },
    { name: "Construct Now", about: "Reliable and efficient construction services.", tags: ["Construction", "Engineering"], industry: "Construction", email: "now@constructnow.com" },
    { name: "Home Makers", about: "Renovation and interior design services.", tags: ["Renovation", "Design"], industry: "Renovation", email: "makeover@homemakers.com" },
    { name: "Renovate Right", about: "Professional renovation services for modern living.", tags: ["Renovation", "Modern"], industry: "Renovation", email: "renovate@renovateright.com" }
];

// Endpoint to get businesses, optionally filtered by industry
app.get('/business', (req, res) => {
    const { industry } = req.query;
    console.log(`Fetching businesses for industry: ${industry}`);

    if (industry) {
        const filteredBusinesses = businesses.filter(b => b.industry === industry);
        console.log(`Found ${filteredBusinesses.length} businesses in ${industry} industry`);
        res.json(filteredBusinesses);
    } else {d
        console.log(`Fetching all businesses, total count: ${businesses.length}`);
        res.json(businesses);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
    fetch('http://localhost:3001/business', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

