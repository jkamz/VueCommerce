<template>
    <div class="product-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details-image">
                    <img :src="product.imageUrls" alt="" class="img-responsive">
                </div>
                <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details-info">
                    <div class="product-details-desc">
                        <h3>{{product.name}}</h3>
                        <p>{{product.description}}</p>
                    </div>
                    <div class="product-details-cart">
                        <p>Ksh {{product.price}}</p>
                        <cart-button :product="product"></cart-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CartButton from './CartButton'

export default {
    props: ['product'],
    components: {
        'cart-button': CartButton
    }
}
</script>

<style>
  .product-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }

  .product-details-desc {
    padding-top: 30px;
  }

  .product-details-desc h3 {
    margin: 5px 0 30px 0;
  }
  .product-details-cart {
    display: flex;
    padding-top: 30px;
  }
  .product-details-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
</style>