import React from 'react';
import '../css/paper-style-shared.css';


const Paper = (props) => {
  const depth = props.depth ? props.depth : '1';

  return <div className={`Paper u-depth-${depth}`}>
    {props.children}
  </div>;
};

export default Paper;
