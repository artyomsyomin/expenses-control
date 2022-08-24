import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  console.log('classNAMESSSS '+props.className)

  return <div className={classes}>{props.children}</div>;
};

export default Card;
