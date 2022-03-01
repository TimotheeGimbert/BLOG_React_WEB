import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import APIManager from 'services/axiosMethods';


const Article = () => {
  const location = useLocation();
  const { article } = location.state;
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  const handleDelete = async () => {
    await APIManager.deleteArticle(article.id);
    window.location.href = '/';
  }

  const handleEdit = () => {
    setEdit(true);
  }

  const handleSave = async () => {
    const newArticle = { title: title, content: content }
    await APIManager.editArticle(article.id, newArticle);
    setEdit(false);
  }

  return (
    <>
      <div className='Article'>
        <div className='Article__title'>
          {title}
        </div>
        <div className='Article__content'>
          {content}
        </div> <br/>
        <button onClick={() => handleEdit()}>Edit</button> <br/>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>

      { edit && 
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
    </>
  );
};

export default Article;