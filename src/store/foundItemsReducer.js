import { UPLOAD_FOUND_ITEMS, CLEAR_FOUND_ITEMS } from "../constants/actions";

const defaultState = {
    foundItems: [null]
}

export const foundItemsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPLOAD_FOUND_ITEMS:
            return {...state, foundItems: [...action.payload]};
        case CLEAR_FOUND_ITEMS:
            return {...state, foundItems: [null]};
        default: 
            return state;
    }
}

export const uploadFoundItemsAction = (payload) => ({type: UPLOAD_FOUND_ITEMS, payload});
export const clearFoundItemsAction = (payload) => ({type: CLEAR_FOUND_ITEMS, payload});
