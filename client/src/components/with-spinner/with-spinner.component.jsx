import React from "react";
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrapperComponent => ({ isLoading, ...otherProps }) =>
  isLoading
    ? <Spinner />
    : <WrapperComponent {...otherProps} />;

export default WithSpinner;
