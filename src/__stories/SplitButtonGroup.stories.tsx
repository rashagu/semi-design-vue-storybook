import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf, Meta, Story} from '@storybook/vue3';
import {Button, Dropdown} from "@kousum/semi-ui-vue";
import {IconClose, IconEdit, IconTick, IconUser, IconDelete, IconTreeTriangleDown} from "@kousum/semi-icons-vue";
import {ButtonGroup, SplitButtonGroup} from "@kousum/semi-ui-vue";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SplitButtonGroup',
  component: Button,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
} as Meta<ButtonProps>;
//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  components: { Button },
  setup(){
    return ()=><SplitButtonGroup style={{marginRight:10}}>
      <Button theme="solid" type="primary">分裂按钮</Button>
      <Dropdown menu={[
        { node: 'item', name: '编辑项目', onClick: () => console.log('编辑项目点击') },
        { node: 'item', name: '重置项目' },
        { node: 'divider' },
        { node: 'item', name: '复制项目' },
        { node: 'item', name: '从项目创建模版' },
        { node: 'divider' },
        { node: 'item', name: '删除项目', type: 'danger' },
      ]} trigger="click" position="bottomRight">
        <Button style={{padding:'8px 4px'}} theme="solid" type="primary" icon={<IconTreeTriangleDown />} />
      </Dropdown>
    </SplitButtonGroup>
  },
});
export const Primary = Template.bind({});
Primary.args = { type: 'primary', };
