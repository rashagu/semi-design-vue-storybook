import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {Meta, storiesOf, Story} from '@storybook/vue3';
import IconTest from "../components/IconTest";
import string from "async-validator/dist-types/validator/string";
import {Button} from "@kousum/semi-ui-vue";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";
import {IconEdit, IconProps} from "@kousum/semi-icons-vue";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Icon',
  component: Button,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    size:{
      options: ['inherit', 'extra-small', 'small', 'default', 'large', 'extra-large'],
      control: { type: 'select' },
    },
  },
  args: {
    //👇 Now all Button stories will be primary.
    spin: false, rotate: 0
  },
} as Meta<IconProps>;
const Template: Story<IconProps> = (args: IconProps) => ({
  components: { Button },
  setup(){
    return ()=><IconEdit />
  },
});

export const Primary = Template.bind({});
Primary.args = {};
