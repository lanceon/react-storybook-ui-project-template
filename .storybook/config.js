import { configure } from '@kadira/storybook';

const loadStories = () => {
  require('../stories/buttons');
};

configure(loadStories, module);
