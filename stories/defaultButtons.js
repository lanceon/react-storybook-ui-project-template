import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs';

storiesOf('Default Buttons', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <button onClick={action('clicked')} disabled={boolean('Disabled', false)}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')} disabled={boolean('Disabled', false)}>😀 😎 👍 💯</button>
  ));
