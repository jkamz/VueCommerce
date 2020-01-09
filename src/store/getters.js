export const productGetters = {
    //single product
    oneProduct: (state, getters) => id => {
        if(getters.allProducts.length > 0){
            return getters.allProducts.filter(item => item._id === id)[0]
        } else {
            return state.product
        }
    },

    // all products
    allProducts: (state, getters) => {
        return state.products
    }
}