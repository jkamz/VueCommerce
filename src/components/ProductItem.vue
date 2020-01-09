<template>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="product">
            <router-link :to="'/view/'+product.id">
                <div class="product-image">
                    <img :src="product.imageUrls" alt="product" class="img-responsive">
                </div>
                <div class="product-desc">
                    <div class="product-info">
                        <h4>{{product.name}}</h4>
                    </div>
                    <div class="product-price">
                        ${{product.price}}
                    </div>
                </div>
            </router-link>
            <div class="product-action">
                <cart-button :product="product"></cart-button> 
            </div>
        </div>
    </div>
</template>

<script>

import CartButton from './CartButton'

export default {
    name: 'product-item',
    props: ['product'],
    components: {
        'cart-button': CartButton
    }
}
</script>