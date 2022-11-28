import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { fetchItems } from '../store/asyncActions/items';
import WishList from './wishList/WishList.jsx';
import Layout from './layout/Layout.jsx';
import MainPageContent from './MainPageContent.jsx';
import ItemPage from './itemPage/ItemPage.jsx';
import Bag from './bag/Bag.jsx';
import Registration from './signin/Registration.jsx';
import SignIn from './signin/SignIn.jsx';
import '../index.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchItems()), []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPageContent />} />
            <Route path="items/:id" element={<ItemPage />} />
            <Route path="bag" element={<Bag />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="registration" element={<Registration />} />
            <Route path="sign_in" element={<SignIn />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
