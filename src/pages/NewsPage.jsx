import React from 'react';
import { news } from '../data';

const NewsPage = () => {
  return (
    <div style={{ marginLeft:'50px', marginRight:'50px', marginTop: '120px'}}>
      <p style={{ marginLeft: '20px' }}>Trang Chủ / <b>Tin Tức</b></p>
      <div className="news-articles">
        {news.map(article => (
          <div key={article.id} className="news-article">
            <img src={article.imageUrl} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p><em>Ngày đăng: {article.date}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
