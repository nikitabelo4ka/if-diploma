import { ADD_TO_BAG, CHANGE_QUANTITY, REMOVE_FROM_BAG, CLEAR_BAG } from "../constants/actions";

const defaultState = {
    bag: []
}

export const bagReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TO_BAG:
            return {...state, bag: [...state.bag, {...action.payload, quantity: 1}]};
        case CHANGE_QUANTITY:
            return {...state, bag: [...state.bag.map(item => item.id === action.payload[0] ? {...item, quantity: action.payload[1]} : item)]};
        case REMOVE_FROM_BAG:
            return {...state, bag: [...state.bag.filter(item => item.id !== action.payload.id)]};
        case CLEAR_BAG:
            return {...state, bag: []};    
        default: 
            return state;      
    }
}

export const addToBagAction = (payload) => ({type: ADD_TO_BAG, payload});
export const removeFromBagAction = (payload) => ({type: REMOVE_FROM_BAG, payload});
export const changeQuantityAction = (payload) => ({type: CHANGE_QUANTITY, payload});
export const clearBagAction = () => ({type: CLEAR_BAG});
