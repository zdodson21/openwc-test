import { html } from 'lit';
import '../src/openwc-test.js';

export default {
  title: 'OpenwcTest',
  component: 'openwc-test',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <openwc-test
      style="--openwc-test-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </openwc-test>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
