// import product from "../../api/products.js";

// Изменил название на более конкретное, и вообще, я бы хранил папку api в src )
import productApi from "../../api/products.js";

export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, newProducts) {
      state.products = newProducts;
    },
  },
  actions: {
    // getProductsList(ctx, data) {
    //   return api.getProductsList();
    // },
    //
    // getProductList переименован в fetchProductList
    // К тому же, он будет вызывать мутацию массива продуктов, а не возвращать данные
    async fetchProducts({ commit }) {
      const newProducts = await productApi.getProductsList();

      commit("setProducts", newProducts);
    },
  },
  getters: {
    getProducts: (state) => state.products,
  },
};
