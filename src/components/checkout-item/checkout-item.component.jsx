import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ( {cartItem, clearItem, removeCartItem, addCartItem } ) => {
  const  { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={`${imageUrl}`} alt="item"/>
      </div> 
      <div className='name'>{name}</div>
      <div className='quantity'>
        <span className='arrow' 
          onClick={ () => removeCartItem(cartItem) }
        > &#10094; </span>
        <span className="value">{quantity}</span>
        <span className='arrow' 
          onClick={ () => addCartItem(cartItem) }
        > &#10095; </span>
      </div>
      <div className='price'>$ {price}</div>
      <div className='price'>$ {price * quantity}</div>
      <div className='remove-button' 
          onClick={ () => clearItem (cartItem) }
      >&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem   : item => dispatch ( clearItemFromCart (item) ),
  removeCartItem: item => dispatch ( removeItem (item) ),
  addCartItem: item => dispatch ( addItem(item) )
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
