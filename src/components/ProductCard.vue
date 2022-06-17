<template>
  <div class="product-card">
    <p class="product-card__title">{{ product.title }}</p>
    <img
      class="product-card__image"
      :src="product.image"
      :alt="product.title"
    />
    <p class="product-card__price">Цена: {{ product.price }} {{ currency }}</p>

    <div>
      <input type="number" v-model="amount" />
      <span>кг</span>
    </div>

    <button class="product-card__button" @click="addToCart">В корзину</button>
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

  data: () => ({
    amount: 0,
  }),

  methods: {
    addToCart() {
      if (this.amount > 0)
        this.$emit("add-to-cart", {
          ...this.product,
          amount: Number(this.amount),
        });
    },
  },
};
</script>

<style scoped>
/* По умолчанию в экран будет вмещаться три карточки */
.product-card {
  display: inline-block;

  width: 33%;

  border: 1px solid #908888;
  border-radius: 5px;

  text-align: center;

  padding: 10px;
}

.product-card__image {
  width: 100%;
}

.product-card__button {
  padding: 5px;
  margin: 5px;
}

/* Если длина экрана в пределах 420-840px */
@media (max-width: 840px) and (min-width: 420px) {
  .product-card {
    width: 50%;
  }
}

/* Если длина экрана будет меньше 420px */
@media (max-width: 420px) {
  .product-card {
    width: 100%;
  }
}
</style>
