import React, { useState, useEffect } from 'react';
import Item from './Item.jsx';
import Title from '../title/Title.jsx';
import './item.css';

function FoundItems({ foundItems, category, className }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(foundItems.slice(0, 4));
  }, [foundItems]);

  let numberOfElements = 4;

  function showMore() {
    if (foundItems.length > 4) {
      setItems((prevArr) => [...prevArr, ...foundItems.slice(numberOfElements, 4)]);
      numberOfElements += 4;
    }
    setItems(foundItems);
  }

  return (
    <div className={className}>
      {foundItems.length === 0 ? (
        <p className="not-found">No {category} products found</p>
      ) : (
        <>
          <Title>{category}</Title>
          <div className="found-items">
            {items.map((item) => (
              <Item key={item.id} data={item} />
            ))}
          </div>
          <button className={(foundItems.length > 4 && items.length < foundItems.length) ? 'show-more-button' : 'unactive'} onClick={showMore}>
            Show more
          </button>
        </>
      )}
    </div>
  );
}

export default FoundItems;
