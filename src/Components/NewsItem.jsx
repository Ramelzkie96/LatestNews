import React from 'react';
import image from '../assets/News_Featured.png';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3"
      style={{
        width: '300px',
        height: '400px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        className="card-img-container"
        style={{
          width: '100%',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#333',
        }}
      >
        <img
          src={src ? src : image}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
          alt="News"
        />
      </div>
      <div className="card-body" style={{ padding: '16px', textAlign: 'center' }}>
        <h5 className="card-title" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {title ? title.slice(0, 50) : 'No Title'}
        </h5>
        <p className="card-text" style={{ fontSize: '14px', margin: '10px 0' }}>
          {description ? description.slice(0, 90) : 'No description available.'}
        </p>
        <a href={url} className="btn btn-primary" style={{ marginTop: 'auto' }}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
