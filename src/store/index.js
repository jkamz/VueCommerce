import Vue from 'vue'
import Vuex from 'vuex'

import {productGetters} from './getters'
import {cartMutations, productMutations} from './mutations'

export default new Vuex.Store({
    strict: true,

    //state
    state: {
        //all products
        products: [],
        //selected product
        product: [],
        //items to buy
        cart: [],
        //api calls loader
        isLoading: false
    },

    getters: Object.assign({}, productGetters),
    mutations: Object.assign({}, cartMutations, productMutations)  
})