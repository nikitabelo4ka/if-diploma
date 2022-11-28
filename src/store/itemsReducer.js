import { UPLOAD_ITEMS } from "../constants/actions";

const defaultState = {
    items: []
}

export const itemsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPLOAD_ITEMS:
            return {...state, items: [...action.payload]};
        default: 
            return state;
    }
}

export const uploadItemsAction = (payload) => ({type: UPLOAD_ITEMS, payload});
