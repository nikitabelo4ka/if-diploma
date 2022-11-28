import React, { useLayoutEffect, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from '../itemsByCategory/Item.jsx';
import Title from "../title/Title.jsx";
import { clearFoundItemsAction } from "../../store/foundItemsReducer.js";
import './itemsBySearch.css';

function ItemsBySearch() {

    const [items, setItems] = useState([]);

    const itemsBySearch = useSelector((state) => state.foundItems.foundItems);
    console.log(itemsBySearch);
    const dispatch = useDispatch();

    useEffect(() => {
        setItems(itemsBySearch.slice(0, 4));
    }, [itemsBySearch]);

    useLayoutEffect(() => () => {
        dispatch(clearFoundItemsAction());
    }, []);

    let numberOfElements = 4;

    function showMore() {
      if (itemsBySearch.length > 4) {
        setItems((prevArr) => [...prevArr, ...itemsBySearch.slice(numberOfElements, 4)]);
        numberOfElements += 4;
      }
      setItems(itemsBySearch);
    }

    return (
        <div className={itemsBySearch[0] === null ? "unactive" : "items-by-search"}>
            <Title>Search results</Title>
            {items[0] !== null && itemsBySearch.length !== 0 ? (   
                <>
                    <div className="found-items-by-search">
                        {items.map((item) => (
                            <Item key={item.id} data={item} />
                        ))}
                    </div>
                    <button className={(itemsBySearch.length > 4 && items.length < itemsBySearch.length) ? 'show-more-button' : 'unactive'} onClick={showMore}>
                        Show more
                    </button>
                </>
            )
            :
            (
                <p className="items-by-search-not-found">Not found</p>
            )}
        </div>
    );
}

export default ItemsBySearch;
