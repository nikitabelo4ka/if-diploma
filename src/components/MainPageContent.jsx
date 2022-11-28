import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Main from './main/Main.jsx';
import Categories from './categories/Categories.jsx';
import SalesItems from './sales/SalesItems.jsx';
import ShopInstagram from './shopInstagram/ShopInstagram.jsx';
import ItemsBySearch from './itemsBySearch/ItemsBySearch.jsx';

function MainPageContent() {
  const writeOpenedPage = useOutletContext();

  useEffect(() => {
    writeOpenedPage('home');
  }, []);

  return (
    <div>
      <Main />
      <ItemsBySearch />
      <Categories />
      <SalesItems />
      <ShopInstagram />
    </div>
  );
}

export default MainPageContent;
