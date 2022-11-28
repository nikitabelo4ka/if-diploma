import React from 'react';
import IconsSVG from '../../assets/images/sprite.svg';
import InstagramPicture1 from '../../assets/images/instagramShop/instagram-picture1.png';
import InstagramPicture2 from '../../assets/images/instagramShop/instagram-picture2.png';
import InstagramPicture3 from '../../assets/images/instagramShop/instagram-picture3.png';
import InstagramPicture4 from '../../assets/images/instagramShop/instagram-picture4.png';
import InstagramPicture5 from '../../assets/images/instagramShop/instagram-picture5.png';
import './shopInstagram.css';

function ShopInstagram() {
  return (
    <div className="shop-instagram">
      <div className="instagram-shop-header">
        <p className="shop-instagram-label">SHOP INSTAGRAM</p>
        <a href="" className="shop-instagram-link">
          SHOP
          <svg className="instagram-shop-link-arrow">
            <use xlinkHref={`${IconsSVG}#arrow`} />
          </svg>
        </a>
      </div>
      <img src={InstagramPicture1} alt="instagramPicture1" className="instagram-picture picture1" />
      <img src={InstagramPicture2} alt="instagramPicture2" className="instagram-picture picture2" />
      <img src={InstagramPicture3} alt="instagramPicture3" className="instagram-picture picture3" />
      <img src={InstagramPicture4} alt="instagramPicture4" className="instagram-picture picture4" />
      <img src={InstagramPicture5} alt="instagramPicture5" className="instagram-picture picture5" />
      <p className="instagram-shop-signature">#MODNIKKY</p>
    </div>
  );
}

export default ShopInstagram;
