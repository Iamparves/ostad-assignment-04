let cart = [];

export const getCartItems = () => cart;

export const addToCart = (productId) => {
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart = [...cart, { id: productId, quantity: 1 }];
  }
};

export const removeFromCart = (productId) => {
  const cartItemIndex = cart.findIndex((item) => item.id === productId);
  cart.splice(cartItemIndex, 1);
};

export const incrementCart = (productId) => {
  const cartItem = cart.find((item) => item.id === productId);
  cartItem.quantity++;
};

export const decrementCart = (productId) => {
  const cartItem = cart.find((item) => item.id === productId);
  cartItem.quantity === 1 ? cartItem.quantity : cartItem.quantity--;
};

export const clearCart = () => {
  cart = [];
};
