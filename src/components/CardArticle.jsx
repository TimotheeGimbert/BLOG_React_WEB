import React, { useEffect, useState } from 'react';
import './CardArticle.scss';
import { Link } from 'react-router-dom';
import APIManager from 'services/axiosMethods';


const CardArticle = ( props ) => {
  const [author, setAuthor] = useState([]);

  useEffect( (props) => {
    fetchAuthor(props.article.user_id);
  }, []);

  const fetchAuthor = async (authorId) => {
    //const response = await APIManager.getAuthorName(authorId);
    //setAuthor(response);
  }

  return (
    <Link to={`/articles/${props.article.id}`} state={{ article: props.article }}>
      <div className='Article'>
        <div className='Article__title'>
          { props.article.title } (Author: { author.name })
        </div>
        <div className='Article__content'>
          { props.article.content }
        </div>
      </div>
      
    </Link>
  );
};

export default CardArticle;