<template>
    <product-component :product="product"></product-component>
</template>

<script>

import ProductComponent from '../components/ProductComponent'

export default {
    created(){
        if(!this.product.name){
            this.$store.dispatch('allProducts')
        }
    },

    computed: {
        product(){
            return this.$store.getters.oneProduct(this.$route.params['id'])
        }
    },

    components: {
        'product-component': ProductComponent
    }
}
</script>