import {
  clearCart,
  decrementCart,
  incrementCart,
  removeFromCart,
} from "./cart.js";
import { renderCartList, renderProductList } from "./renderView.js";

const cartItemsContainer = document.querySelector(".cartItemsContainer");

cartItemsContainer.addEventListener("click", (e) => {
  const el = e.target;
  const id = Number(e.target.dataset.id);

  if (el.closest(".clearCartBtn")) clearCart();
  if (el.closest(".increment")) incrementCart(id);
  if (el.closest(".decrement")) decrementCart(id);
  if (el.closest(".delete")) removeFromCart(id);

  renderCartList();
});

// initial page view
renderProductList();
renderCartList();
