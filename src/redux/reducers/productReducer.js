import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes/actionTypes';

// initial state
const initialState = {
    cart: []
};

// reducer function
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,

            };

        default: return state;
    }
}

export default productReducer;
