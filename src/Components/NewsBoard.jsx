import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0', // Fix for 426 error
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles || []);
        setError(null);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Failed to fetch news articles.');
      });
  }, [category]);

  return (
    <div className='mt-4 text-center'>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {error ? (
        <p className="text-danger">{error}</p>
      ) : articles && articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p>Loading or no articles available.</p>
      )}
    </div>
  );
};

export default NewsBoard;
