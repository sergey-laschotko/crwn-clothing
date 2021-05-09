import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

const defaultLabelStyles = css`
  font-size: 16px;
  color: grey;
  top: 10px;
`;

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

const getLabelStyles = (props) =>
  props.value && props.value.length ? shrinkLabelStyles : defaultLabelStyles;

export const InputLabel = styled.label`
  ${getLabelStyles};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  transition: 300ms ease all;
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  ${(props) =>
    props.type && props.type === "password" && "letter-spacing: 0.3em;"}

  &:focus {
    outline: none;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyles}
  }
`;
