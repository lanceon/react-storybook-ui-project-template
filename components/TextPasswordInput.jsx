import React from 'react';

const TextPasswordInput = ({ type, value, onChange, ...props }) => (
  <input type={type} value={value} onChange={onChange} {...props} />
);

TextPasswordInput.propTypes = {
  type: React.PropTypes.oneOf(['text', 'password']),
  value: React.PropTypes.string.isRequired,
};

TextPasswordInput.defaultProps = {
  type: 'text',
};

export default TextPasswordInput;
