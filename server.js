const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;
app.get('/logo', async (req, res) => {
    const { design, content } = req.query;

    if (!design || !content) {
        return res.status(400).json({ error: 'Design and content are required' });
    }

    try {
        const apiUrl = `https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html?text=${encodeURIComponent(content)}`;
        const response = await axios.get(apiUrl);
        const imageUrl = response.data.imageUrl; 

        res.json({ imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Error generating image' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
