import React from "react";

import {
  CollectionPageContainer,
  Title,
  Items,
  StyledCollectionItem
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => <StyledCollectionItem key={item.id} item={item} />)}
      </Items>
    </CollectionPageContainer>
  );
};

export default CollectionPage;