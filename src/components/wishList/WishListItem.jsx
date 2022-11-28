import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromListAction } from '../../store/wishListReducer';
import { addToBagAction } from '../../store/bagReducer';
import { isObjInWishList, containsObjInBag } from '../../helpers/helpers';
import Size from './Size.jsx';
import IconsSVG from '../../assets/images/sprite.svg';

function WishListItem({ item }) {
  const sizesString = item.availableSizes[0];
  const sizesArr = sizesString.split(', ');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.wishList.wishList);
  const bag = useSelector((state) => state.bag.bag);

  function addToBag(item) {
    if (!containsObjInBag(item, bag, dispatch)) {
      dispatch(addToBagAction(item));
    }
  }

  return (
    <div className={isObjInWishList(item, list) ? 'wishlist-item' : 'unactive'}>
      <img className="wishlist-item-icon" src={item.images[0]} alt={item.name} />
      <div className="wishlist-item-description">
        <p className="wishlist-item-name">{item.name}</p>
        <div className="wishlist-item-price-wrapper">
          <p className="wishlist-item-price">
            {item.price.currency} ${item.price.value}
          </p>
        </div>
        <div className="wishlist-item-color-wrapper">
          <p className="wishlist-item-color-name">COLOR:</p>
          <p className="wishlist-item-color">{item.color.name}</p>
        </div>
        <div className="wishlist-item-size-wrapper">
          <p className="wishlist-item-size">SIZE</p>
          <select className="wishlist-item-size-select" name="" id="wishlist-item-select">
            {sizesArr.map((size, index) => (
              <Size key={index} size={size} />
            ))}
          </select>
        </div>
        <div className="wishlist-item-add-remove-wrapper">
          <button
            className={
              containsObjInBag(item, bag, dispatch)
                ? 'wishlist-add-to-bag-button disabled'
                : 'wishlist-add-to-bag-button'
            }
            onClick={() => addToBag(item)}
            disabled={containsObjInBag(item, bag, dispatch) ? 'disbled' : ''}
          >
            ADD TO BAG
          </button>
          <div
            className="wishlist-item-remove"
            onClick={() => dispatch(removeFromListAction(item))}
          >
            <svg className="wishlist-item-remove-icon">
              <use xlinkHref={`${IconsSVG}#remove-icon`} />
            </svg>
            <button className="wishlist-item-remove-button">REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;
