import React from 'react';
import heart from '../../../assets/images/heart.png';
import redHeart from '../../../assets/images/red-heart.png';
import cl from './Like.module.css';
const Like = (props) => {
  return (
    <button className={cl.like} onClick={props.fClick}>
      <img
        className={cl.like_img}
        src={props.like ? redHeart : heart}
        alt="Like"
      />
    </button>
  );
};

export default Like;
