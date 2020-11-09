import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ( {cartItems} ) => (
  <div className="cart-dropdown">
    <div className="cart-items" >
      { cartItems.map (cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />
        )
      }
    </div>
    <CustomButton type="button">GO TO CHECKOUT</CustomButton>
  </div>
);

// Redux call - Runs several times during normal execution
// const mapStateToProps = ( { cart: { cartItems } } ) => ({
//   cartItems
// })

// reselect call - Runs only when Memoize selector data changes
const mapStateToProps = state => ({
  cartItems: selectCartItems( state )
})

export default connect(mapStateToProps)(CartDropdown);
