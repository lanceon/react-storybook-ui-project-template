import React from 'react';
import Button from '../components/Button';

const ButtonExample = ({ label, onClick, ...props }) => (
  <Button
    label={label}
    onClick={onClick}
    raised
    {...props}
  />
);

ButtonExample.propTypes = {
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default ButtonExample;
