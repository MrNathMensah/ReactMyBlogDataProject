import React from 'react'

function About(props) {
  return (
    <aside>
      <img src={props.image} width='120px' 
      height='50px' alt="blog logo"/>
      <p>{props.About}</p>
    </aside>
  );
}

export default About