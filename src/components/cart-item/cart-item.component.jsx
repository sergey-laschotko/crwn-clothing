import React from "react";

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  ItemDetailName
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemDetailName>{name}</ItemDetailName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem;