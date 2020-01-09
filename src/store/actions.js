import axios from 'axios'
import {
    API_URL,
    ONE_PRODUCT,
    ONE_PRODUCT_SUCCESS,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS
} from './constants'


export const productActions = {
    allProducts ({commit}) {
        commit(ALL_PRODUCTS)

        axios.get(API_URL).then(res => {
            commit(ALL_PRODUCTS_SUCCESS, res.data)
        })
    }
}

