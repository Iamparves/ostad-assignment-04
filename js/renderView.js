import { getCartItems } from "./cart.js";
import products from "./products.js";

const productsContainer = document.querySelector(".productsContainer");
const cartList = document.querySelector(".cartList");
const billDetails = document.querySelector(".billDetails");

export const renderProductList = () => {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productCard = `
      <div class="product__card">
        <h2>${product.name}</h2>
        <p>${product.price} BDT</p>
        <button data-id="${product.id}" class="addToCartBtn">Add to Cart</button>
      </div>
      `;

    productsContainer.insertAdjacentHTML("beforeend", productCard);
  });
};

export const renderCartList = () => {
  cartList.innerHTML = "";
  const cartItems = getCartItems();
  const cartProducts = cartItems.map((item) => {
    const product = products.find((product) => product.id === item.id);
    return { ...product, quantity: item.quantity };
  });

  cartProducts.forEach((product) => {
    const { id, name, price, quantity } = product;

    const cartItem = `
      <div class="cartItem">
        <div class="namePrice">
          <h4>${name}</h4>
          <p>${price} BDT</p>
        </div>
        <div class="quantity">
          <span data-id="${id}" class="increment">+</span>
          <p>${quantity}</p>
          <span data-id="${id}" class="decrement">-</span>
        </div>
        <h4 class="totalPrice">${price * quantity} BDT</h4>
        <img data-id="${id}" class="delete" src="img/delete.jpg" alt="">
      </div>
      `;
    cartList.insertAdjacentHTML("beforeend", cartItem);
  });

  renderBillDetails(cartProducts);
};

const renderBillDetails = (cartProducts) => {
  const subtotal = cartProducts.reduce(
    (subtotal, product) => subtotal + product.price * product.quantity,
    0
  );
  const { percentage, discount } = calculateDiscount(subtotal);
  const total = subtotal - discount;
  
  const billDetailsContent = `<div class="item">
          <p>Sub Total</p>
          <p>BDT ${subtotal.toFixed(1)}</p>
        </div>
        <div class="item">
          <p>Discount (${percentage}%)</p>
          <p>BDT ${discount.toFixed(1)}</p>
        </div>
        <div class="item">
          <p>Total</p>
          <p>BDT ${total.toFixed(1)}</p>
        </div>`;

  billDetails.innerHTML = billDetailsContent;
};

const calculateDiscount = (subtotal) => {
  let percentage = 0;

  if (subtotal >= 5000) {
    percentage = 7;
  } else if (subtotal >= 2000) {
    percentage = 5;
  } else if (subtotal >= 1000) {
    percentage = 3;
  }

  const discount = (percentage / 100) * subtotal;

  return { percentage, discount };
};
