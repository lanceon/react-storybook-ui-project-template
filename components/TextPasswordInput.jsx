import React from 'react';

const TextPasswordInput = ({ type, value, ...props }) => (
  <input type={type} value={value} {...props} />
);

TextPasswordInput.propTypes = {
  type: React.PropTypes.oneOf(['text', 'password']),
  value: React.PropTypes.string.isRequired,
};

TextPasswordInput.defaultProps = {
  type: 'text',
};

export default TextPasswordInput;
