import { uploadItemsAction } from "../itemsReducer";
import { getItems } from "../../../services/services";

export const fetchItems = () => {
    return function(dispatch) {
        getItems()
        .then((response) => response.json())
        .then((result) => dispatch(uploadItemsAction(result)));
    }
};