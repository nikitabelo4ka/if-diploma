import {createStore, combineReducers, applyMiddleware} from "redux";
import { itemsReducer } from "./itemsReducer";
import { bagReducer } from "./bagReducer";
import { wishListReducer } from "./wishListReducer";
import { foundItemsReducer } from "./foundItemsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    items: itemsReducer,
    bag: bagReducer,
    wishList: wishListReducer,
    foundItems: foundItemsReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;