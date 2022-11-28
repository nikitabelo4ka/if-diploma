import React from 'react';
import FooterListItem from './FooterListItem.jsx';
import FooterSubscription from './FooterSubscription.jsx';
import IconsSVG from '../../assets/images/sprite.svg';
import './footer.css';

function Footer() {
  return (
    <>
      <FooterSubscription />
      <div className="footer">
        <div className="footer-lists">
          <div className="customer-service">
            <p className="footer-list-header">CUSTOMER SERVICE</p>
            <FooterListItem name="CONTACT" />
            <FooterListItem name="TRACK ORDER" />
            <FooterListItem name="DELIVERY & RETURNS" />
            <FooterListItem name="PAYMENT" />
            <FooterListItem name="MAKE A RETURN" />
            <FooterListItem name="FAQ" />
          </div>
          <div className="info">
            <p className="footer-list-header">INFO</p>
            <FooterListItem name="GIFT VOUCHERS" />
            <FooterListItem name="SIZE GUIDE" />
            <FooterListItem name="CAREERS AT MODNIKKY" />
            <FooterListItem name="ABOUT US" />
            <FooterListItem name="LEGAL POLICIES" />
          </div>
          <div className="follow-us">
            <p className="footer-list-header">FOLLOW US</p>
            <div className="footer-list-follow">
              <svg className="footer-list-media-logo">
                <use xlinkHref={`${IconsSVG}#facebok-logo`} />
              </svg>
              <FooterListItem name="FACEBOOK" />
            </div>
            <div className="footer-list-follow">
              <svg className="footer-list-media-logo">
                <use xlinkHref={`${IconsSVG}#odnoklassniki-logo`} />
              </svg>
              <FooterListItem name="ODNOKLASSNIKI" />
            </div>
            <div className="footer-list-follow">
              <svg className="footer-list-media-logo">
                <use xlinkHref={`${IconsSVG}#instagram-logo`} />
              </svg>
              <FooterListItem name="INSTAGRAM" />
            </div>
          </div>
          <div className="contact-us">
            <p className="footer-list-header">CONTACT US</p>
            <p className="contact-us-item">hello@modnikky.com</p>
            <p className="contact-us-item">+7 910 832 26XX</p>
            <p className="contact-us-item">
              Visit us at Shalalaeva 23,
              <br />
              Bologoe, Russia
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
