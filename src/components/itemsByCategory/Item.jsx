import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBagAction } from '../../store/bagReducer';
import { containsObjInBag, handleAddToWishList, isObjInWishList } from '../../helpers/helpers';
import './item.css';

function Item({ data, price }) {
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag.bag);
  const list = useSelector((state) => state.wishList.wishList);

  return (
    <div className="category-item">
      <Link key={data.id} to={`/items/${data.id}`}>
        <img src={data.images[0]} alt={data.name} className="category-item-icon" />
        <div
          className={containsObjInBag(data, bag, dispatch) ? 'unactive' : 'category-item-shadow'}
        ></div>
      </Link>
      <svg
        className={
          isObjInWishList(data, list, dispatch)
            ? 'category-add-to-wishlist-logo add-active'
            : 'category-add-to-wishlist-logo add-unactive'
        }
        onClick={() => handleAddToWishList(data, list, dispatch)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="42"
        height="36"
      >
        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>
      <p className={price === 'sale' ? 'category-item-price sale' : 'category-item-price'}>
        ${data.price.value}
      </p>
      <button
        className={
          containsObjInBag(data, bag, dispatch) ? 'unactive' : 'category-item-shadow-button'
        }
        onClick={() => dispatch(addToBagAction(data))}
      >
        ADD TO BAG
      </button>
    </div>
  );
}

export default Item;
