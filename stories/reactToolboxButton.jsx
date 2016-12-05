import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ButtonExample from '../examples/ButtonExample';

storiesOf('React Toolbox Components', module)
  .add('Button', () => <ButtonExample label="Click Me" onClick={action('Button clicked')} />);
