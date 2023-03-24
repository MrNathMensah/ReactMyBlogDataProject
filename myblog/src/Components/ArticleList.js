import React from 'react';
import Article from './Article'; // Import the Article component

const ArticleList = (props) => {
    
    return (
      props.listPost.map(article=>{
        return <Article key={article.id} art={article}/>
      })
    );
  }

export default ArticleList