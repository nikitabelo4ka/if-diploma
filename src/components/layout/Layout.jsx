import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import background from '../../assets/images/background.png';
import './layout.css';

function Layout() {
  const [openedPage, setOpenedPage] = useState('home');

  return (
    <div
      style={
        openedPage === 'home'
          ? { backgroundImage: `url(${background})` }
          : { backgroundColor: '#fff' }
      }
      className="layout"
    >
      <Header openedPage={openedPage} />
      <Outlet context={(value) => setOpenedPage(value)} />
      <Footer />
    </div>
  );
}

export default Layout;
