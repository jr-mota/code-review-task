<template>
  <div class="cart-list">
    <cart-product-card
      v-for="(product, idx) of reversedProductsFromCart"
      :product="product"
      :currency="currency"
      :key="idx"
    />
  </div>
</template>

<script>
import CartProductCard from "./CartProductCard.vue";

export default {
  props: {
    currency: String,
  },

  components: {
    CartProductCard,
  },

  computed: {
    // В style guide по vue, при именовании методов используется camelCase, думаю лучше использовать его )
    // Ну и поменять название )

    // spisok_dlya_rendera() {
    //     return this.cart.reverse();
    // },

    productsFromCart() {
      return this.$store.getters["cartOfProducts/getProducts"];
    },
    reversedProductsFromCart() {
      return this.productsFromCart.reverse();
    },
  },
};
</script>

<style scoped>
.cart-list {
  padding: 10px;
}
</style>
