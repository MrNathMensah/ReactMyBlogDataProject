import React from 'react';

const Article = (props) => {
  return (
    <article>
      <h3>{props.art.title}</h3>
      <small>{props.art.date ? props.art.date:'January 1, 1976'}</small>
      <p>{props.art.preview}</p>
      <p>{props.art.minutes}</p>
    </article>
  );
}

export default Article