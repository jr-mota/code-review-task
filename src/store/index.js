import Vue from "vue";
import Vuex from "vuex";

// Разделил на модули. Лучше сделать декомпозицию чем хранить всё в одном файле )
import products from "./products";
import cartOfProducts from "./cartOfProducts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    cartOfProducts,
  },
});
