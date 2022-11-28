import React from 'react';
import './category.css';
import IconsSVG from '../../assets/images/sprite.svg';

function Category({ className, id, categoryName, handleClick }) {
  return (
    <button className="category-button" onClick={() => handleClick(categoryName)}>
      <svg className={className}>
        <use xlinkHref={`${IconsSVG}#${id}`} />
      </svg>
      <p className="category-name">{categoryName}</p>
    </button>
  );
}

export default Category;
