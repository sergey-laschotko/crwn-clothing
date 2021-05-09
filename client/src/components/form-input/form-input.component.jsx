import React from "react";

import {
  InputContainer,
  Input,
  InputLabel
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <InputContainer>
    <Input onChange={handleChange} {...otherProps} />
    {label ? (
      <InputLabel {...otherProps}>
        {label}
      </InputLabel>
    ) : null}
  </InputContainer>
);

export default FormInput;
