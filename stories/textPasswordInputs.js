import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, select, text } from '@kadira/storybook-addon-knobs';
import TextPasswordInputExample from '../examples/TextPasswordInputExample';

const stories = storiesOf('Text/Password Inputs', module);

stories.addDecorator(withKnobs);

stories.add('text input without placeholder', () => (
  <TextPasswordInputExample
    logger={v => action(`Input #1 changed: [${v}]`)}
  />
));

stories.add('text input with placeholder (change with knobs)', () => (
  <TextPasswordInputExample
    placeholder={text('Placeholder', 'Type some text...')}
    logger={v => action(`Input #2 changed: [${v}]`)}
  />
));

stories.add('text/password input with switch', () => (
  <TextPasswordInputExample
    type={select('Input type', ['text', 'password'], 'text')}
    logger={v => action(`Input #3 changed: [${v}]`)}
  />
));

