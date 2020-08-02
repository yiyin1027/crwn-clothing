export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if(existingCartItem) {
    console.log("exist")
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}  : cartItem
    )
  }
  console.log("not exist")
  
  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};