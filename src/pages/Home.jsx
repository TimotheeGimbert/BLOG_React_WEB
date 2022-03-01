import React, { useEffect, useState } from 'react';
import Hero from 'components/Hero';
import CardArticle from '../components/CardArticle';
import APIManager from 'services/axiosMethods';


const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect( () => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await APIManager.getArticles();
    setArticles(response);
  }

  const handleSignUp = async () => {
    const authObject = { "user": {
      "email": "test222@yopmail.com",
      "password": "azerty"
    }};
    const response = await APIManager.signUp(authObject);
    console.log(response);
  }

  const handleLogIn = async () => {
    const authObject = { "user": {
      "email": "test222@yopmail.com",
      "password": "azerty"
    }};
    const response = await APIManager.logIn(authObject);
    console.log(response);
  }

  const handleLogOut = async () => {
    const response = await APIManager.logOut();
    console.log(response);
  }


  return (
    <div className='Home'>
      <Hero />
      {
        articles.map( (article, index) => {
         return <CardArticle article={article} key={index}/>
        })
      }
      <button onClick={() => handleSignUp()}>SignUP</button>
      <button onClick={() => handleLogIn()}>LogIn</button>
      <button onClick={() => handleLogOut()}>LogOut</button>
    </div>
  );
};

export default Home;