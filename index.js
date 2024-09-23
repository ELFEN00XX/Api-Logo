const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/neon', async (req, res) => {
    const { text } = req.body;

    try {
        const response = await axios.post('https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html', {
            text: text
        });
        const $ = cheerio.load(response.data);
        
        // Adjust ✨
        const imageUrl = $('img.some-class-selector').attr('src'); 

        if (imageUrl) {
            res.json({ imageUrl });
        } else {
            res.status(404).json({ error: 'Image not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
