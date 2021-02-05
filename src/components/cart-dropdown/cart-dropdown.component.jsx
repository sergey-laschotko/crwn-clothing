import React from "react";
import { connect } from 'react-redux';

import CustomButton from "../custom-button/custom-button.component";
import CartItem from '../cart-item/cart-item.component';

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => <CartItem key={cartItems.id} item={item} />)}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);
