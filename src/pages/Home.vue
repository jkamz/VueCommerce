<template>
    <div>
        <div class="title">
            <h1><i class="fa fa-air-freshener"></i> Lavish Scents</h1>
        </div>
        <product-list></product-list>
    </div>
</template>

<script>

import ProductList from '../components/ProductList'

export default {
    name: 'home',
    components: {
        'product-list': ProductList
    }
}
</script>