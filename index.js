const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/download', async (req, res) => {
  const tiktokUrl = req.body.url;
  try {
    // Placeholder for SnapTik logic (we’ll refine this)
    const response = await axios.post('https://snaptik.app/abc', { url: tiktokUrl }, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const videoUrl = response.data.video_url; // Adjust based on real response
    res.json({ download_url: videoUrl });
  } catch (error) {
    res.status(500).json({ error: 'Download failed', details: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on ${port}`));