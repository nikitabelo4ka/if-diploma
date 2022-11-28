import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBagAction, changeQuantityAction } from '../../store/bagReducer';
import { containsObjInBag } from '../../helpers/helpers';
import Size from './Size.jsx';
import IconsSVG from '../../assets/images/sprite.svg';

function BagItem({ item }) {
  const sizesString = item.availableSizes[0];
  const sizesArr = sizesString.split(', ');
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag.bag);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(changeQuantityAction([item.id, quantity]));
  }, [quantity]);

  return (
    <div className={containsObjInBag(item, bag, dispatch) ? 'bag-item' : 'unactive'}>
      <img className="bag-item-icon" src={item.images[0]} alt={item.name} />
      <div className="bag-item-description">
        <p className="bag-item-name">{item.name}</p>
        <div className="bag-item-price-wrapper">
          <p className="bag-item-price">
            {item.price.currency} ${item.price.value * quantity}
          </p>
        </div>
        <div className="bag-item-color-wrapper">
          <p className="bag-item-color-name">COLOR:</p>
          <p className="bag-item-color">{item.color.name}</p>
        </div>
        <div className="bag-item-size-wrapper">
          <p className="bag-item-size">SIZE</p>
          <select className="bag-item-size-select" name="" id="bag-item-select">
            {sizesArr.map((size, index) => (
              <Size key={index} size={size} />
            ))}
          </select>
        </div>
        <div className="bag-item-quantity-wrapper">
          <p className="bag-item-quantity">QUANTITY:</p>
          <select
            className="bag-item-quantity-select"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="bag-item-remove" onClick={() => dispatch(removeFromBagAction(item))}>
          <svg className="bag-item-remove-icon">
            <use xlinkHref={`${IconsSVG}#remove-icon`} />
          </svg>
          <button className="bag-item-remove-button">REMOVE</button>
        </div>
      </div>
    </div>
  );
}

export default BagItem;
