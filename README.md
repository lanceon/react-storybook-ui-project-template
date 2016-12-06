# React-storybook-ui-project-template #

Template project for isolated UI component development with ReactJS.

# Get #

```
git clone https://github.com/lanceon/react-storybook-ui-project-template
```

Checkout `master` branch for example of React components built with plain html or `react-toolbox` branch for example with [React Toolbox](http://react-toolbox.com/) dependency and component example.

# Setup #

```
npm install
```

# Run StoryBook #

```
npm run storybook
```

Open [http://localhost:9001/](http://localhost:9001/) in a browser to access your StoryBook with configured components.

# How to Create New Components #

1. Create new file or folder with component files under `/components` (e.g. `/components/TextPasswordInput.jsx`).
2. Create component that wraps up new UI component and provides it with all required properties (e.g. `/examples/TextPasswordInputExample.jsx`).
3. Create StoryBook _story_ (`/stories/textPasswordInputs.js`). Story may contain component properties wrapped with StoryBook's _knobs_ to let user change them dynamically from web browser to test component in different modes and states.
4. Include story into StoryBook's configuration file (`.storybook/config.js`).
5. Run storybook with npm.

# Integrated Tools #

* _React StoryBook_ - a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively. It runs outside of your app. So you can develop UI components in isolation without worrying about app specific dependencies and requirements.
  https://getstorybook.io/

* _Babel_ - JavaScript compiler.
  https://babeljs.io/

* _ESLint_ - JavaScript linter with AirBnb and ReactJS rules.
  http://eslint.org/

* _StyleLint_ - CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
  http://stylelint.io/

