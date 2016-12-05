import React from 'react';
import { Button as RTButton } from 'react-toolbox/lib/button';
import theme from 'react-toolbox/lib/button/theme.scss';

const Button = ({ label, onClick, ...props }) =>
  <RTButton
    label={label}
    onClick={onClick}
    theme={theme}
    {...props}
  />;

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Button;
