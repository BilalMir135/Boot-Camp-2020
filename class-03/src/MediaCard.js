import React from 'react';

function MediaCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageUrl}></img>
    </div>
  );
}

export default MediaCard;
