import React, { useEffect, useState } from 'react';
import Hero from 'components/Hero';
import CardArticle from '../components/CardArticle';
import APIManager from 'services/axiosMethods';


const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect( () => {
    doFetch();
  }, []);

  const doFetch = async () => {
    const response = await APIManager.getArticles();
    setArticles(response);
  }


  return (
    <div className='Home'>
      <Hero />
      {
        articles.map( (article, index) => {
         return <CardArticle article={article} key={index}/>
        })
      }
    </div>
  );
};

export default Home;