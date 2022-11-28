import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearBagAction } from '../../store/bagReducer';
import { sendOrder } from '../../../services/services';
import IconsSVG from '../../assets/images/sprite.svg';
import BagItem from './BagItem.jsx';
import './bag.css';

function Bag() {
  const writeOpenedPage = useOutletContext();
  useEffect(() => {
    writeOpenedPage('other');
  }, []);

  const dispatch = useDispatch();
  const [productsResponse, setProductsResponse] = useState('');
  const bag = useSelector((state) => state.bag.bag);

  const totalPrice = bag.reduce((sum, item) => sum + Number(item.price.value) * item.quantity, 0);

  const products = bag.map((item) => item.id);

  function makeOrder(event) {
    event.preventDefault();

    sendOrder(products)
      .then((response) => response.json())
      .then((data) => {
        setProductsResponse(data);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(clearBagAction());
  }
  if (productsResponse.message !== undefined) {
    window.scrollTo(0, 0);
    return <div className="products-response">{productsResponse.message}</div>;
  }
  return (
    <>
      <div className="bag">
        <div className="bag-header">
          <p className="bag-header-name">BAG</p>
          <p className="bag-header-quantity">{bag.length} items</p>
        </div>
        <div className="bag-items">
          {bag.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <div className="bag-send-items">
          <p className="bag-total-price">Total USD ${totalPrice}</p>
          <button className="bag-send-button" onClick={(event) => makeOrder(event)}>
            PROCEED TO CHECKOUT
          </button>
          <div className="bag-send-pay">
            <svg className="bag-send-pay-icon1">
              <use xlinkHref={`${IconsSVG}#maestro-logo`} />
            </svg>
            <svg className="bag-send-pay-icon2">
              <use xlinkHref={`${IconsSVG}#visa-logo`} />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bag;
