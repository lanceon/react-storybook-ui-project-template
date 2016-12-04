import React from 'react';
import TextPasswordInput from '../components/TextPasswordInput';

class TextPasswordInputExample extends React.Component {
  static propTypes = {
    logger: React.PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    console.log(this.props.logger)
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
          onChange={this.handleChange}
          {...props}
        />
      </div>
    );
  }
}

export default TextPasswordInputExample;
