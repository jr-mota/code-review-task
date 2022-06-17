<template>
  <!-- Почему бы не воспользоваться семантикой? div изменен на header  -->
  <header class="header">
    <h3>Товаров в корзине на: {{ productPrice }} {{ currency }}</h3>
  </header>
</template>

<script>
export default {
  props: {
    // Вся информация корзины хранится в vuex, поэтому будем обращаться к нему, а не получать извне
    // (тут еще синтаксис неправильным был)
    //
    // cart: Array,
    // required: true,
    // default: {},

    currency: String,
  },

  // Уберем из watch вычисление суммы, и cartPrice из data, сделаем вместо этого спагетти - одно computed свойство
  //
  // data() {
  //   return {
  //     cartPrice: 0,
  //   };
  // },

  computed: {
    productsFromCart() {
      return this.$store.getters["cartOfProducts/getProducts"];
    },
    productPrice() {
      return this.productsFromCart.reduce((acc, currProduct) => {
        return acc + currProduct.price * currProduct.amount;
      }, 0);
    },
  },

  // watch: {
  //   cart(cart) {
  //     let val = 0;
  //     cart.forEach((item) => {
  //       val += item.price * item.amount;
  //     });
  //     this.cartPrice = val;
  //   },
  // },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>

<!-- 
Большинство компонентов данного проекта использует порядок template, script, style.
Думаю лучше использовать единый стиль

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</>

<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template> 
-->
