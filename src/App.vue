<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav-left">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

