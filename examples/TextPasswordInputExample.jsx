import React from 'react';
import TextPasswordInput from '../components/TextPasswordInput';

class TextPasswordInputExample extends React.Component {
  static propTypes = {
    logger: React.PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = (event, logger) => {
    const value = event.target.value;
    logger(value);
    this.setState({ value });
  };

  render() {
    const { logger, ...props } = this.props;
    return (
      <div>
        <p>
          Example input:
        </p>
        <TextPasswordInput
          value={this.state.value}
          onChange={e => this.handleChange(e, logger)}
          {...props}
        />
      </div>
    );
  }
}

export default TextPasswordInputExample;
