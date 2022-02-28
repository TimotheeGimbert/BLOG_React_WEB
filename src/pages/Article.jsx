import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import APIManager from 'services/axiosMethods';


const Article = () => {
  const location = useLocation();
  const { article } = location.state;

  const postDelete = async () => {
    const response = await APIManager.deleteArticle(article.id);
    console.log(response);
  }

  return (
    <div className='Article'>
      <div className='Article__title'>
        {article.title}
      </div>
      <div className='Article__content'>
        {article.content}
      </div> <br/>
      <button>Edit</button> <br/>
      <button onClick={() => postDelete()}>Delete</button>
    </div>
  );
};

export default Article;