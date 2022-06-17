export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
    pushProduct(state, product) {
      state.cart.push(product);
    },
  },
  getters: {
    getProducts: (state) => state.cart,
  },
};
