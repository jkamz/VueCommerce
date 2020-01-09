export const productGetters = {
     // all products
     allProducts: (state, getters) => {
        return state.products
    },
    //single product
    oneProduct: (state, getters) => id => {
        if(Object.keys(getters.allProducts).length > 0){
            return Object.values(getters.allProducts).filter(item => item.id === id)[0]
        } else {
            return state.product
        }
    }
}