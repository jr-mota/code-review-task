<template>
  <div class="product-list">
    <!-- 
    Из этого выйдет отличный компонент 

    <div
      class="card"
      v-for="product in products"
      :style="{ width: cardsWidth + '%' }"
    >
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="" />
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id" />
        <span>кг</span>
      </div>

      <button @click="addToCart(product)">В корзину</button>
    </div> 
    -->

    <product-card
      v-for="(product, idx) of products"
      :product="product"
      :currency="currency"
      :key="idx"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  props: {
    currency: String,
  },

  components: { ProductCard },

  data() {
    return {
      // Продукты лучше брать из vuex, т.к. теперь они хранятся только там
      //
      // products: [],
      productFetchInterval: false,
      PRODUCT_FETCH_TIME: 1000,
    };
  },

  created() {
    this.startPricesMonitoring();
  },

  methods: {
    startPricesMonitoring() {
      // Интервал нельзя будет удалить, и откуда взялись эти числа?
      //
      // setInterval(this.fetchProducts, 1000);

      // Теперь мы можем очистить его в beforeDestroy
      this.productFetchInterval = setInterval(
        this.fetchProducts,
        this.PRODUCT_FETCH_TIME
      );
    },
    // async getList() {
    //   let data = await this.$store.dispatch('getProductsList');
    //   this.products = data;
    // },
    fetchProducts() {
      this.$store.dispatch("products/fetchProducts");
    },

    // Этот метод особенно порадовал, зачем так усложнять )
    //
    // addToCart(product) {
    //   let amount = this.$refs.amount.find(
    //     (input) => input.id === product.id
    //   ).value;
    //   let data = {
    //     amount,
    //     price: product.price,
    //     title: product.title,
    //   };
    //   this.$parent.cart.push(data);
    // },

    addToCart(product) {
      this.$store.commit("cartOfProducts/pushProduct", product);
    },
  },

  computed: {
    // Тут можно использовать медиа запросы вместо этого свойства, т.к. они поддерживаются в большинстве
    // браузеров, кроме IE 6-9. Ну и еще, innerWidth возвращает число без px )
    //
    // См. ProductCard
    //
    // cardsWidth() {
    //   let width = window.innerWidth;
    //   let count = 1;

    //   if (width > "840px") {
    //     count = 3;
    //   } else if (width > "420px" && width < "840px") {
    //     count = 2;
    //   }
    //   return 100 / count;
    // },
    products() {
      return this.$store.getters["products/getProducts"] || [];
    },
  },

  beforeDestroy() {
    clearInterval(this.productFetchInterval);
  },
};
</script>

<style scoped>
.product-list {
  padding: 10px;
}
</style>
