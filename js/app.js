import {
  addToCart,
  clearCart,
  decrementCart,
  incrementCart,
  removeFromCart,
} from "./cart.js";
import { renderCartList, renderProductList } from "./renderView.js";

const productsContainer = document.querySelector(".productsContainer");
const cartItemsContainer = document.querySelector(".cartItemsContainer");

productsContainer.addEventListener("click", (e) => {
  if (e.target.closest(".addToCartBtn")) {
    const { id } = e.target.dataset;

    addToCart(+id);
    renderCartList();
  }
});

cartItemsContainer.addEventListener("click", (e) => {
  const el = e.target;
  const { id } = e.target.dataset;

  if (el.closest(".clearCartBtn")) clearCart();
  if (el.closest(".increment")) incrementCart(+id);
  if (el.closest(".decrement")) decrementCart(+id);
  if (el.closest(".delete")) removeFromCart(+id);

  renderCartList();
});

// initial page view
renderProductList();
renderCartList();
