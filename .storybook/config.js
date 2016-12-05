import { configure } from '@kadira/storybook';

const loadStories = () => {
  require('../stories/textPasswordInputs');
  require('../stories/defaultButtons');
};

configure(loadStories, module);
