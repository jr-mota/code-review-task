<template>
  <div id="app">
    <the-header :currency="currency" />
    <the-product-list :currency="currency" />

    <h2 class="cart-title">Корзина</h2>
    <the-cart-list :currency="currency" />
  </div>
</template>

<script>
// Поменял имена компонентов, т.к. они используются только один раз, ну и названия чтобы были поконкретнее
//
// import Header from "./components/Header.vue";
// import List from "./components/List.vue";
// import Cart from "./components/Cart.vue";

import TheHeader from "./components/TheHeader.vue";
import TheProductList from "./components/TheProductList.vue";
import TheCartList from "./components/TheCartList.vue";

export default {
  name: "App",

  data() {
    return {
      currency: "VGTB",
    };
  },

  components: {
    TheHeader,
    TheProductList,
    TheCartList,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.cart-title {
  padding: 10px;
}
</style>
