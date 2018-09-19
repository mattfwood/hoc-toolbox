import { configure } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { addDecorator } from '@storybook/react/dist/client/preview';

// addDecorator((story, context) => withInfo('common info')(story)(context));

setDefaults({
  header: true,
  inline: true,
  // maxPropsIntoLine: 1000
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

// addDecorator(
//   withInfo({
//     header: true
//   })
// );