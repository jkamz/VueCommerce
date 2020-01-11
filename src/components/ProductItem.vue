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
                        {{product.price}}/-
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

<style>
    
  .product {
    background: #FFF;
    padding: 15px;
    margin-bottom: 15px;
    transition: all 200ms ease-in;
    position: relative;
    overflow: hidden;
  }
  
  .product-image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 225px;
  }

  .product-desc {
    width: 100%;
    display: flex;
    padding: 20px 20px 15px;
    background: #FFF;
  }
  .product-info {
    flex: 2;
  }

  .product-price {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #51D2B7;
  }

  .product-price p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
  .product-action {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
  }
  .product-action button {
    border-radius: 0;
    width: 100%;
    display: block;
  }
  
  
  .product:hover {
    transform: scale(1.1) translateY(-15px);
    box-shadow: 7px 9px 18px -2px rgba(61,61,61,1);
  
  }
  
  .product-link {
    display: block;
    color: #3D3D3D;
  }
  
  .product-link:hover {
    color: #3D3D3D;
    text-decoration: none;
  }
  
  .product .product-image {
    width: 100%;
  }
    
  .product-desc h4 {
    margin: 3px 0 5px 0;
  }
  
  .product-price-cart {
    display: flex;
    margin-top: 10px;
  }
  
  .product-price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }

  .product .product-desc,
  .product .product-action {
    transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
  }
  .product:hover .product-desc {
    transform: translateY(-40px);
  }
  .product:hover .product-action {
    transform: none;
  }
</style>