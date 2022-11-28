import React, { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBagAction } from '../../store/bagReducer';
import { containsObjInBag, handleAddToWishList, isObjInWishList } from '../../helpers/helpers';
import DropDownInformation from '../dropDownInformation/DropDownInformation.jsx';
import Size from './Size.jsx';
import './itemPage.css';

function ItemPage() {
  window.scrollTo(0, 0);

  const writeOpenedPage = useOutletContext();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);
  const bag = useSelector((state) => state.bag.bag);
  const list = useSelector((state) => state.wishList.wishList);

  const params = useParams();
  const itemId = params.id;
  const item = items.filter((item) => item.id === itemId)[0];

  useEffect(() => {
    writeOpenedPage('other');
  }, []);

  const sizesString = item.availableSizes[0];
  const sizesArr = sizesString.split(', ');

  function addToBag(item) {
    if (!containsObjInBag(item, bag, dispatch)) {
      dispatch(addToBagAction(item));
    }
  }

  return (
    <div className="item-page">
      <div className="images-wrapper">
        <img className="item-image-1" src={item.images[0]} alt={item.name} />
        <img className="item-image-2" src={item.images[1]} alt={item.name} />
      </div>
      <div className="item-information">
        <p className="item-information-name">{item.name}</p>
        <p className="item-information-price">{`${item.price.currency} $${item.price.value}`}</p>
        <p className="item-information-color-name">COLOR</p>
        <div className="item-information-color" style={{ backgroundColor: item.color.hex }}></div>
        <p className="item-information-size-name">SIZE</p>
        <div className="item-information-sizes-wrapper">
          {sizesArr.map((size, index) => (
            <Size key={index} size={size} />
          ))}
        </div>
        <div className="add-item-buttons">
          <button
            className={
              containsObjInBag(item, bag, dispatch)
                ? 'item-add-to-bag-button disabled'
                : 'item-add-to-bag-button'
            }
            onClick={() => addToBag(item)}
            disabled={containsObjInBag(item, bag, dispatch) ? 'disbled' : ''}
          >
            ADD TO BAG
          </button>
          <button className="item-add-to-wishlist-button">
            <svg
              className={
                isObjInWishList(item, list, dispatch)
                  ? 'item-add-to-wishlist-logo button-add-active'
                  : 'item-add-to-wishlist-logo button-add-unactive'
              }
              onClick={() => handleAddToWishList(item, list, dispatch)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="42"
              height="36"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          </button>
        </div>
        <div className="drop-down-informations">
          <DropDownInformation
            information={item.description}
            informationName="PRODUCT DESCRPITION"
          />
          <DropDownInformation information="Not found" informationName="SHIPPING & RETURNS" />
          <DropDownInformation information="Not found" informationName="FABRIC COMPOSITION" />
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
