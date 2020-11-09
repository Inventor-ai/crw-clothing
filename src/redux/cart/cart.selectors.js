import { createSelector } from 'reselect';

const selectCart = state => state.cart;  // Input selector

export const selectCartItems = createSelector (
  [selectCart],
  cart => cart.cartItems
);

// export const selectCartItemsCount = createSelector (
//   [selectCartItems],
//   cartItems => 
//   cartItems.reduce (
//      ( accumalatedQuantity, cartItem ) => 
//        accumalatedQuantity + cartItem.quantity, 
//      0
//   )
// );

export const selectCartItemsCount = createSelector (
  [selectCartItems],
  cartItems => {
     console.error('Long time process');
     return cartItems.reduce (
     ( accumalatedQuantity, cartItem ) => 
       accumalatedQuantity + cartItem.quantity, 
     0
  )}
);
