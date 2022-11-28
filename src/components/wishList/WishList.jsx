import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WishListItem from './WishListItem.jsx';
import './wishList.css';

function WishList() {
  window.scrollTo(0, 0);

  const writeOpenedPage = useOutletContext();
  useEffect(() => {
    writeOpenedPage('other');
  }, []);

  const wishlist = useSelector((state) => state.wishList.wishList);

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <p className="wishlist-header-name">WishList</p>
        <p className="wishlist-header-quantity">{wishlist.length} items</p>
      </div>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <WishListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
