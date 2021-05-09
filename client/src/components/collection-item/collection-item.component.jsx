import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  Image,
  CollectionItemFooter,
  Name,
  StyledCustomButton
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, className }) => {
  const { imageUrl, name, price } = item;

  return (
    <CollectionItemContainer className={className}>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionItemFooter>
        <Name>{name}</Name>
        <span>{price}</span>
      </CollectionItemFooter>
      <StyledCustomButton
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </StyledCustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
