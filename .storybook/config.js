import { configure } from '@kadira/storybook';

const loadStories = () => {
  require('../stories/textPasswordInputs');
  require('../stories/reactToolboxButton');
  require('../stories/defaultButtons');
};

configure(loadStories, module);
