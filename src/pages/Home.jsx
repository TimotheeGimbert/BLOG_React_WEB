import React, { useEffect, useState } from 'react';
import Hero from 'components/pages/Hero';
import Article from './Article';
import APIManager from 'services/axiosMethods';


const Home = () => {
  const [articles, setArticles] = useState([]);


  const doFetch2 = async () => {
    const response = await APIManager.getArticles();
    setArticles(response);
  }

  useEffect( () => {
    doFetch2();
  }, []);

  useEffect(() => {

    console.log(articles);
  }, [articles])

  return (
    <div className='Home'>
      <Hero />
      {
        articles.map( (article, index) => {
         return <Article article={article} key={index}/>
        })
      }
        <button onClick={() => doFetch2()}></button>
    </div>
  );
};

export default Home;