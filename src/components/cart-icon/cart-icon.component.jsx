import  React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden} >
     <ShoppingIcon className="shopping-icon"/>
     <span className="item-count">{itemsCount}</span>
  </div> 
);

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch( toggleCartHidden() )
});

const mapStateToProps = ( state ) => ({
   itemsCount: selectCartItemsCount ( state )
})

// const mapStateToProps = ( { cart: { cartItems } } ) => {
//    console.error('long time process');
//    return ({
//      itemsCount: cartItems.reduce( ( accumulatedQuantity, cartItem ) => 
//                                      accumulatedQuantity + cartItem.quantity, 0)
//    });
// }

// const mapStateToProps = ( { cart: { cartItems } } ) => ({
//    itemsCount: cartItems.reduce( ( accumulatedQuantity, cartItem ) => 
//      accumulatedQuantity + cartItem.quantity, 0)
// })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
