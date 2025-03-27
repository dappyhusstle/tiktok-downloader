const TikTokScraper = require('tiktok-scraper');

app.post('/download', async (req, res) => {
  try {
    const tiktokUrl = req.body.url;
    if (!tiktokUrl) {
      return res.status(400).json({ error: 'TikTok URL is required' });
    }

    const videoData = await TikTokScraper.getVideoMeta(tiktokUrl, { noWaterMark: true });
    const videoUrl = videoData.collector[0].videoUrl;

    res.json({ download_url: videoUrl });
  } catch (error) {
    res.status(500).json({ error: 'Download failed', details: error.message });
  }
});
