import React from 'react';

function Gate({ isOpen }) {
  return isOpen ? <div>open</div> : <div>closed</div>;
}

export default Gate;
