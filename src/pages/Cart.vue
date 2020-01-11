<template>
    <div>
        <div class="title">
            <h1>Your Cart</h1>
        </div>
        <div v-for="product in products">
            <template>
                <product-component :product="product"></product-component>
            </template>
        </div>
    </div>
</template>
<script>

import ProductComponent from '../components/ProductComponent'

export default {
    name: 'cart',
    computed: {
        products(){
            return this.$store.state.cart
        }
    },
    components: {
        'product-component': ProductComponent
    }
    
}
</script>