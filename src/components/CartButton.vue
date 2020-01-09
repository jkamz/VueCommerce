<template>
    <div>
        <button class="button" v-if="inCart" @click="addToCart">
            <i class="fa fa-cart-plus"></i>
            Add to Cart
        </button>
        <button v-else class="button button-danger" @click="removeFromCart(product.id)">
            <i class="fa fa-trash"></i>
             Remove from Cart
        </button>
    </div>
</template>

<script>

import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../store/constants'

export default {
    props: ['product'],
    data () {
        return {
            cart: this.$store.state.cart
        }
    },

    computed: {
        inCart () {
            return this.cart.indexOf(this.product) < 0
        }
    },

    methods: {
        addToCart(){
            this.$store.commit(ADD_TO_CART, this.product)
        },
        removeFromCart(){
            this.$store.commit(REMOVE_FROM_CART, this.product)
        }
    }
}
</script>