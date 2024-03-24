const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// Hardcoded businesses for demonstration
let businesses = [
    { name: "Tech Innovations", about: "Leading in AI and robotics, providing state-of-the-art solutions for automation and machine learning.", tags: ["AI", "Robotics"], industry: "Manufacturing", email: "contact@techinnovations.com" },
    { name: "Machine Masters", about: "Specializing in advanced machinery for manufacturing, offering unparalleled precision and efficiency.", tags: ["Machinery", "Manufacturing"], industry: "Manufacturing", email: "info@machinemasters.com" },
    { name: "Event Caterers", about: "Premier catering services for all events, known for exquisite menus and impeccable service.", tags: ["Food", "Service"], industry: "Catering", email: "info@eventcaterers.com" },
    { name: "Gourmet Paradise", about: "Offers exquisite catering and event services, transforming ordinary events into gourmet experiences.", tags: ["Gourmet", "Events"], industry: "Catering", email: "contact@gourmetparadise.com" },
    { name: "Design Studio", about: "A leading graphic design and branding agency, creating visually stunning and brand-enhancing designs.", tags: ["Design", "Branding"], industry: "Graphic Design", email: "studio@design.com" },
    { name: "Creative Minds", about: "Innovative graphic design services, where creativity meets functionality to create impactful designs.", tags: ["Creativity", "Innovation"], industry: "Graphic Design", email: "ideas@creativeminds.com" },
    { name: "Web Solutions", about: "Full-stack web development services provider specializing in creating robust and scalable web applications.", tags: ["Web", "Development"], industry: "Web Design", email: "solutions@web.com" },
    { name: "Code Crafters", about: "Expertise in crafting beautiful websites and applications, blending innovation with functionality.", tags: ["Coding", "Web Design"], industry: "Web Design", email: "craft@codecrafters.com" },
    { name: "Finance Advisors", about: "Top-tier financial planning services, offering expert advice and tailored financial solutions.", tags: ["Finance", "Advisory"], industry: "Financial Services", email: "advice@financeadvisors.com" },
    { name: "Invest Smart", about: "Providing smart investment solutions tailored to individual needs, ensuring optimal financial growth.", tags: ["Investment", "Finance"], industry: "Financial Services", email: "invest@investsmart.com" },
    { name: "Build It Right", about: "Quality construction services that guarantee durability and precision in every project undertaken.", tags: ["Construction", "Architecture"], industry: "Construction", email: "contact@builditright.com" },
    { name: "Construct Now", about: "Reliable and efficient construction services focused on timely delivery and architectural excellence.", tags: ["Construction", "Engineering"], industry: "Construction", email: "now@constructnow.com" },
    { name: "Home Makers", about: "Renovation and interior design services tailored to bring your dream home to life, focusing on aesthetics and functionality.", tags: ["Renovation", "Design"], industry: "Renovation", email: "makeover@homemakers.com" },
    { name: "Renovate Right", about: "Professional renovation services that transform spaces into modern, stylish, and functional areas.", tags: ["Renovation", "Modern"], industry: "Renovation", email: "renovate@renovateright.com" },
    { name: "Innovatech Solutions", about: "Cutting-edge technology services.", tags: ["Technology", "Innovation"], industry: "Manufacturing", email: "contact@innovatechsolutions.com" },
    { name: "Global Machineries", about: "World-class machinery and equipment.", tags: ["Heavy Machinery", "Global"], industry: "Manufacturing", email: "sales@globalmachineries.com" },
    { name: "Feast for Kings", about: "Luxury catering services.", tags: ["Luxury", "Catering"], industry: "Catering", email: "info@feastforkings.com" },
    { name: "Epic Events", about: "Creating memorable events.", tags: ["Events", "Planning"], industry: "Catering", email: "bookings@epicevents.com" },
    { name: "Pixel Perfect", about: "Precision in graphic design.", tags: ["Graphics", "Design"], industry: "Graphic Design", email: "design@pixelperfect.com" },
    { name: "Creative Labs", about: "Innovative design solutions.", tags: ["Creative", "Lab"], industry: "Graphic Design", email: "hello@creativelabs.com" },
    { name: "WebWizards", about: "Expert web development services.", tags: ["Web", "Tech"], industry: "Web Design", email: "support@webwizards.com" },
    { name: "Code Artisans", about: "Crafting elegant web solutions.", tags: ["Coding", "Artistry"], industry: "Web Design", email: "contact@codeartisans.com" },
    { name: "Wealth Management Co.", about: "Financial advisory and wealth management.", tags: ["Wealth", "Finance"], industry: "Financial Services", email: "service@wealthmanagementco.com" },
    { name: "Investment Gurus", about: "Strategic investment planning.", tags: ["Investment", "Strategy"], industry: "Financial Services", email: "info@investmentgurus.com" },
    { name: "Quality Constructors", about: "We build your dreams.", tags: ["Quality", "Construction"], industry: "Construction", email: "contact@qualityconstructors.com" },
    { name: "BuildMaster", about: "Excellence in construction.", tags: ["Building", "Master"], industry: "Construction", email: "info@buildmaster.com" },
    { name: "Modern Living Spaces", about: "Renovate your space with style.", tags: ["Modern", "Living"], industry: "Renovation", email: "contact@modernlivingspaces.com" },
    { name: "Dream Home Designers", about: "Designing your dream home.", tags: ["Design", "Home"], industry: "Renovation", email: "design@dreamhomedesigners.com" },
    { name: "Tech Advance", about: "Next-generation technology solutions.", tags: ["Tech", "Advance"], industry: "Manufacturing", email: "info@techadvance.com" },
    { name: "Gastro Delights", about: "Delicious catering services.", tags: ["Gourmet", "Catering"], industry: "Catering", email: "service@gastrodelights.com" },
    { name: "Design Works", about: "Innovative graphic solutions.", tags: ["Creative", "Graphics"], industry: "Graphic Design", email: "contact@designworks.com" },
    { name: "Web Innovate", about: "Leading web development company.", tags: ["Web", "Innovation"], industry: "Web Design", email: "info@webinnovate.com" },
    { name: "Finance Experts", about: "Expert financial advice.", tags: ["Finance", "Expertise"], industry: "Financial Services", email: "advice@financeexperts.com" },
    { name: "ConstructIt", about: "Building the future.", tags: ["Construct", "Innovation"], industry: "Construction", email: "build@constructit.com" }
];

// Endpoint to get businesses, optionally filtered by industry
app.get('/business', (req, res) => {
    const { industry } = req.query;
    if (industry) {
        const filteredBusinesses = businesses.filter(b => b.industry === industry);
        res.json(filteredBusinesses);
    } else {
        res.json(businesses);
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});