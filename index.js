const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/download', async (req, res) => {
  try {
    const tiktokUrl = req.body.url;
    if (!tiktokUrl) {
      return res.status(400).json({ error: 'TikTok URL is required' });
    }

    const response = await axios.get('https://tiktok-download-without-watermark.p.rapidapi.com/analysis', {
      params: { url: tiktokUrl },
      headers: {
        'x-rapidapi-key': '4e08Bc9C2cmshdC896C070E09ddep142C1fjsn1e3dCAA57ad1',
        'x-rapidapi-host': 'tiktok-download-without-watermark.p.rapidapi.com'
      }
    });

    const videoUrl = response.data.data.play;
    res.json({ download_url: videoUrl });
  } catch (error) {
    res.status(500).json({ error: 'Download failed', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
