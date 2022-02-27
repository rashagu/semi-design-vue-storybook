// Button.stories.js

import {Button, Dropdown} from "@kousum/semi-ui-vue";
import {Story} from "@storybook/vue3";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonTemplate',
  component: Button,
};


//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args:any) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind:args>Button</Button>',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { type:'primary',theme:'solid' };

export const Secondary = Template.bind({});
Secondary.args = {  };

export const Tertiary = Template.bind({});
Tertiary.args = { };
