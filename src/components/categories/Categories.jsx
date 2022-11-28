import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Title from '../title/Title.jsx';
import Category from './Category.jsx';
import FoundItems from '../itemsByCategory/foundItems.jsx';
import './categories.css';

function Categories() {
  const items = useSelector((state) => state.items.items);

  const [foundItems, setFoundItems] = useState([]);
  const [isFoundItemActive, setIsFoundItemActive] = useState(false);
  const [category, setCategory] = useState('');

  function getCategory(category) {
    setFoundItems(items.filter(
      function (elem) {
        return elem.type === category;
      }));
    setIsFoundItemActive(true);
    setCategory(category);
  }

  return (
    <div className="categories-wrap">
      <Title>
        Shop by the&nbsp;<b>Category</b>
      </Title>
      <div className="categories">
        <Category
          className="dresses-category"
          id="dress"
          categoryName="Dresses"
          handleClick={getCategory}
        />
        <Category
          className="tess-category"
          id="tees"
          categoryName="Tess"
          handleClick={getCategory}
        />
        <Category
          className="swimwear-category"
          id="swimwear"
          categoryName="Swimwear"
          handleClick={getCategory}
        />
        <Category
          className="denim-category"
          id="denim"
          categoryName="Denim"
          handleClick={getCategory}
        />
        <Category
          className="tops-category"
          id="tops"
          categoryName="Tops"
          handleClick={getCategory}
        />
        <Category
          className="beauty-category"
          id="beauty"
          categoryName="Beauty"
          handleClick={getCategory}
        />
      </div>
      <FoundItems
        foundItems={foundItems}
        category={category}
        className={isFoundItemActive ? 'found-items-block' : 'unactive'}
      />
    </div>
  );
}

export default Categories;
