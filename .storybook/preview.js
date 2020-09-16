import 'prism-theme-night-owl';
import 'typeface-montserrat';
import '../src/styles/all.css';
import '../src/styles/anchor.css';
import '../src/styles/body.css';
import '../src/styles/button.css';
import '../src/styles/figure.css';
import '../src/styles/headline.css';
import '../src/styles/html.css';
import '../src/styles/image.css';
import '../src/styles/input.css';
import '../src/styles/list.css';
import '../src/styles/paragraph.css';
import './storybook.css';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};
