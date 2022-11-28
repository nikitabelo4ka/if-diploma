import {addToListAction, removeFromListAction} from '../store/wishListReducer';

const containsObjInBag = function(data, bag) {
    for(let i = 0; i < bag.length; i += 1) {
      if(bag[i].id === data.id) {
        return true;
      }
    }
    return false;
  }

const handleAddToWishList = function(data, list, dispatch) {
    for(let i = 0; i < list.length; i += 1) {
      if(list[i].id === data.id) {
        dispatch(removeFromListAction(data));
        return;
      }
    }
    dispatch(addToListAction(data));
}

const isObjInWishList = function(item, list) {
    for(let i = 0; i < list.length; i += 1) {
      if(list[i].id === item.id) {
        return true;
      }
    }
    return false;
}

function addToBag(item, dispatch, setIsInBag, bag, addToBagAction) {
    if(containsObjInBag(item, bag, dispatch)) {
     setIsInBag(true);
    }
    dispatch(addToBagAction(item));
    setIsInBag(true);
}

export {containsObjInBag, handleAddToWishList, addToBag, isObjInWishList};