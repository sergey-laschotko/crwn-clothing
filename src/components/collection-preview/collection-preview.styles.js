import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
