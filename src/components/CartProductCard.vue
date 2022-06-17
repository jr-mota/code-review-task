<template>
  <div class="cart-product-card">
    <p class="cart-product-card__title">{{ product.title }}</p>
    <img
      class="cart-product-card__image"
      :src="product.image"
      :alt="product.title"
    />
    <p class="cart-product-card__price">
      Цена: {{ product.price }} {{ currency }}
    </p>
    <p class="cart-product-card__amount">Количество: {{ product.amount }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {},
    },
    currency: String,
  },
};
</script>

<style scoped>
.cart-product-card {
  display: inline-block;

  width: 33%;

  border: 1px solid #908888;
  border-radius: 5px;

  text-align: center;

  padding: 10px;
}

.cart-product-card__image {
  width: 100%;
}

.cart-product-card__button {
  padding: 5px;
  margin: 5px;
}

@media (max-width: 840px) and (min-width: 420px) {
  .cart-product-card {
    width: 50%;
  }
}

@media (max-width: 420px) {
  .cart-product-card {
    width: 100%;
  }
}
</style>
