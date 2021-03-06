/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/**
 * Mocking client-server processing
 * This mock API taken from : https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/api/shop.js
 */

const _products = [
  { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb();
    }, 100);
  },
};
