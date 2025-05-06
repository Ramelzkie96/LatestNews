import axios from 'axios';

export default async function handler(req, res) {
  const category = req.query.category || 'general';

  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'us',
        category,
        apiKey: process.env.NEWS_API_KEY,
      },
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('News API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
