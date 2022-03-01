import React, { useEffect, useState } from 'react';
import Hero from 'components/Hero';
import CardArticle from '../components/CardArticle';
import APIManager from 'services/axiosMethods';


const Home = () => {
  const [articles, setArticles] = useState([]);
  const [writeArticle, setWriteArticle] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect( () => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await APIManager.getArticles();
    setArticles(response);
  }

  const handleSave = async () => {
    const newArticle = { 
      title: title, 
      content: content 
    };
    await APIManager.createArticle(newArticle);
    setWriteArticle(false);
  }

  return (
    <div className='Home'>
      <Hero />

      { writeArticle && 
        <div className='Article'>
          <div className='Article__title'>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className='Article__content'>
            <textarea value={content} onChange={(e) => setContent(e.target.value)}/>          
          </div> <br/>
          <button onClick={() => handleSave()}>Save</button> <br/>
        </div>
      }

      <button onClick={() => setWriteArticle(true)}>Write a new article</button>
      {
        articles.map( (article, index) => {
         return <CardArticle article={article} key={index}/>
        })
      }
    </div>
  );
};

export default Home;