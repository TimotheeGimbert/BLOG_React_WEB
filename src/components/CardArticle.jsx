import React from 'react';
import './CardArticle.scss';
import { Link } from 'react-router-dom';

const CardArticle = ( props ) => {

  return (
    <Link to={`/articles/${props.article.id}`} state={{ article: props.article }}>
      <div className='Article'>
        <div className='Article__title'>
          { props.article.title }
        </div>
        <div className='Article__content'>
          { props.article.content }
        </div>
      </div>
    </Link>
  );
};

export default CardArticle;