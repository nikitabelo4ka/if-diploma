import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../modalWindowSearch/Search.jsx';
import './header.css';

function Header({ openedPage }) {
  const bag = useSelector((state) => state.bag.bag);

  const [signInValue, setSignInValue] = useState('SIGN IN');
  const [isModalActive, setIsModalActive] = useState(false);

  const isSignIn = sessionStorage.getItem('isSignIn');

  useEffect(() => {
    if (!isSignIn || isSignIn === 'false') {
      setSignInValue('SIGN IN');
    } else {
      setSignInValue('SIGN OUT');
    }
  }, [isSignIn]);

  function setSignInName() {
    setSignInValue('SIGN IN');
    sessionStorage.removeItem('isSignIn');
  }

  return (
    <div className={openedPage === 'home' ? 'header-home' : 'header-other'}>
      <nav className="left-navigation">
        <a href="" className="left-navigation-text">
          NEW ARRIVALS
        </a>
        <a href="" className="left-navigation-text">
          SHOP
        </a>
        <a href="" className="left-navigation-text">
          COLLECTIONS
        </a>
      </nav>
      <Link to="/">
        <svg
          className="main-logo"
          width="273"
          height="50"
          viewBox="0 0 471 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M35.55 38L20.71 2.02H0.76V52H13.92V11.96H14.06L29.88 52H41.22L57.04 11.96H57.18V52H70.34V2.02H50.39L35.55 38ZM77.0518 27.01C77.0518 37.44 81.2518 53.4 108.132 53.4C135.012 53.4 139.212 37.44 139.212 27.01C139.212 16.58 135.012 0.619998 108.132 0.619998C81.2518 0.619998 77.0518 16.58 77.0518 27.01ZM91.4718 27.01C91.4718 19.24 95.8118 10.14 108.132 10.14C120.452 10.14 124.792 19.24 124.792 27.01C124.792 34.78 120.452 43.88 108.132 43.88C95.8118 43.88 91.4718 34.78 91.4718 27.01ZM159.535 11.54H173.395C183.755 11.54 187.675 17.28 187.675 26.52C187.675 37.09 183.615 42.48 174.655 42.48H159.535V11.54ZM145.955 52H178.295C193.975 52 201.675 42.06 201.675 27.01C201.675 11.96 194.255 2.02 177.105 2.02H145.955V52ZM251.601 36.88H251.461L225.211 2.02H209.461V52H222.621V17.14H222.761L249.991 52H264.761V2.02H251.601V36.88ZM274.266 52H287.846V2.02H274.266V52ZM310.951 23.51V2.02H297.371V52H310.951V37.16L318.861 30.37L335.871 52H354.211L329.501 22.11L352.461 2.02H334.191L310.951 23.51ZM371.86 23.51V2.02H358.28V52H371.86V37.16L379.77 30.37L396.78 52H415.12L390.41 22.11L413.37 2.02H395.1L371.86 23.51ZM434.868 52H448.448V34.57L470.568 2.02H454.608L441.658 23.79L428.708 2.02H412.748L434.868 34.57V52Z" />
        </svg>
      </Link>
      <nav className="right-navigation">
        <div className="main-search" onClick={() => setIsModalActive(true)}>
            <svg
              className="main-search-icon"
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.7061 22.5569L17.9363 16.7671C19.3665 15.0174 20.2286 12.7762 20.2286 10.3335C20.2286 4.73041 15.698 0.184082 10.1143 0.184082C4.52571 0.184082 0 4.73041 0 10.3335C0 15.9365 4.52571 20.4828 10.1143 20.4828C12.5486 20.4828 14.7771 19.6227 16.5208 18.1876L22.2906 23.9725C22.6824 24.3656 23.3143 24.3656 23.7061 23.9725C24.098 23.5842 24.098 22.9452 23.7061 22.5569ZM10.1143 18.4628C5.64245 18.4628 2.00816 14.8159 2.00816 10.3335C2.00816 5.85102 5.64245 2.19921 10.1143 2.19921C14.5812 2.19921 18.2204 5.85102 18.2204 10.3335C18.2204 14.8159 14.5812 18.4628 10.1143 18.4628Z" />
            </svg>
          <p href="" className="right-navigation-text">
            SEARCH
          </p>
        </div>
        <Link to="registration" style={{ textDecoration: 'none' }}>
          <p className="right-navigation-text" onClick={(event) => setSignInName(event)}>
            {signInValue}
          </p>
        </Link>
        <p href="" className="right-navigation-text">
          <Link to="bag" style={{ textDecoration: 'none' }}>
            BAG ({bag.length})
          </Link>
        </p>
        <Link to="wishlist" style={{ textDecoration: 'none' }}>
          <svg
            className="main-wishlist-icon"
            width="27"
            height="24"
            viewBox="0 0 62 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M43.7409 0C40.8623 0 38.1109 0.659911 35.5635 1.96153C33.8295 2.84739 32.2365 4.02439 30.8697 5.42084C29.5027 4.02439 27.9099 2.84739 26.1758 1.96153C23.6283 0.659911 20.8771 0 17.9984 0C8.07411 0 0 8.07411 0 17.9985C0 25.0277 3.71238 32.4934 11.0339 40.1882C17.147 46.6131 24.6313 51.9687 29.8333 55.3303L30.8697 56L31.906 55.3303C37.108 51.9689 44.5923 46.6131 50.7056 40.1882C58.0271 32.4934 61.7393 25.0277 61.7393 17.9985C61.7393 8.07411 53.6652 0 43.7409 0ZM47.9389 37.5557C42.4755 43.2976 35.8207 48.179 30.8697 51.4459C25.9187 48.1788 19.2638 43.2976 13.8006 37.5557C7.17717 30.5948 3.81893 24.0148 3.81893 17.9985C3.81893 10.1799 10.1799 3.81893 17.9985 3.81893C22.4999 3.81893 26.6349 5.88662 29.343 9.49169L30.8697 11.524L32.3963 9.49169C35.1045 5.88662 39.2395 3.81893 43.7409 3.81893C51.5595 3.81893 57.9204 10.1799 57.9204 17.9985C57.9204 24.0148 54.562 30.5948 47.9389 37.5557Z" />
          </svg>
        </Link>
      </nav>
      <Search active={isModalActive} setActive={setIsModalActive}/>
    </div>
  );
}

export default Header;
