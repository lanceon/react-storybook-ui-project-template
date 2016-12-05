import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, select, text } from '@kadira/storybook-addon-knobs';
import TextPasswordInputExample from '../examples/TextPasswordInputExample';

const stories = storiesOf('Text/Password Inputs', module);

stories.addDecorator(withKnobs);

stories.add('text input without placeholder', () => (
  <TextPasswordInputExample
    logger={action('Input #1 changed')}
  />
));

stories.add('text input with placeholder', () => (
  <TextPasswordInputExample
    placeholder={text('Placeholder', 'Type some text...')}
    logger={action('Input #2 changed')}
  />
));

stories.add('text/password input with knob', () => (
  <TextPasswordInputExample
    type={select('Input type', ['text', 'password'], 'text')}
    logger={action('Input #3 changed')}
  />
));

