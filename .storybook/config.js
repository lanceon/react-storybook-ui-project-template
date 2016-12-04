import { configure } from '@kadira/storybook';

const loadStories = () => {
  require('../stories/defaultButtons');
  require('../stories/textPasswordInputs');
};

configure(loadStories, module);
