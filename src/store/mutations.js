import {
    ONE_PRODUCT, 
    ALL_PRODUCTS, 
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    ALL_PRODUCTS_SUCCESS,
    ONE_PRODUCT_SUCCESS
} from './constants'

export const productMutations = {
    [ALL_PRODUCTS] (state) {
        state.isLoading = true;
    },
    [ALL_PRODUCTS_SUCCESS] (state, payload) {
        state.isLoading = false;
        state.products = payload
    },

    [ONE_PRODUCT] (state) {
        state.isLoading = true;
    },
    [ONE_PRODUCT_SUCCESS] (state, payload) {
        state.isLoading = false;
        state.product = payload;
    }
}

export const cartMutations = {
    [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(item => item.id === payload)
        state.cart.splice(index, 1)
    }
}