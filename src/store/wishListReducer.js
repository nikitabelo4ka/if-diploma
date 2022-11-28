import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../constants/actions";

const defaultState = {
    wishList: []
}

export const wishListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_LIST:
            return {...state, wishList: [...state.wishList, action.payload]};
        case REMOVE_FROM_LIST:
            return {...state, wishList: [...state.wishList.filter(item => item.id !== action.payload.id)]};
        default: 
            return state;      
    }
}

export const addToListAction = (payload) => ({type: ADD_TO_LIST, payload});
export const removeFromListAction = (payload) => ({type: REMOVE_FROM_LIST, payload});