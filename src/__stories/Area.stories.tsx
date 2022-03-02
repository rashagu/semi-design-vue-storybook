import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf, Meta, Story} from '@storybook/vue3';
import {Button, Dropdown} from "@kousum/semi-ui-vue";
import {IconClose, IconEdit, IconTick, IconUser, IconDelete, IconTreeTriangleDown} from "@kousum/semi-icons-vue";
import {ButtonGroup, SplitButtonGroup} from "@kousum/semi-ui-vue";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";

import Area from './AreaSelect'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: '地区选择器',
  component: Button,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    theme: {
      options: ['light', 'solid'],
      control: { type: 'select' },
    },
    type:{
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
      control: { type: 'select' },
    },
    size:{
      options: ['default', 'small', 'large'],
      control: { type: 'select' },
    },
  },
  args: {
    //👇 Now all Button stories will be primary.
    block: false, loading: false, circle: false,
  },
} as Meta<any>;
//👇 We create a “template” of how args map to rendering
const Template: Story<any> = (args: any) => ({
  components: { Button },
  render(){
    return <div style={{width:'50%'}}>
      <Area defaultValue="" placeholder={'请选择地区'} onChange={(v)=>{console.log(v)}} />
    </div>
  }
});
export const Primary = Template.bind({});
Primary.args = { type: '地区选择器', };
