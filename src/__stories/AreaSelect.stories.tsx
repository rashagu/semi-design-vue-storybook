import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf, Meta, Story} from '@storybook/vue3';
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";
import {InputProps} from "@kousum/semi-ui-vue/lib/input";
import AreaSelectDemo from "../components/AreaSelectDemo";
import {Text} from "@kousum/semi-ui-vue";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: '自定义混合组件-地区选择器',
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    // defaultValue: {
    //   options: ['light', 'solid'],
    //   control: { type: 'select' },
    // },
    // type:{
    //   options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    //   control: { type: 'select' },
    // },
    // size:{
    //   options: ['default', 'small', 'large'],
    //   control: { type: 'select' },
    // },
  },
  args: {
    //👇 Now all Button stories will be primary.  name?: string,
    //   defaultValue: '',
    //   style?: CSSProperties,
    //   placeholder?: string,
    //   onChange:(v:any)=>void,
    //   disabled?:boolean
  },
} as Meta<InputProps>;
//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  setup(){
    const defaultValue = ref('asd')
    return ()=><div>
      <Text>地区选择器</Text>
      <div>

        <Text>用到的组件：Button, Input, Popover, Radio, RadioGroup</Text>
      </div>
      <AreaSelectDemo  />
    </div>
  },
});
export const AreaSelectDemo1 = Template.bind({});
AreaSelectDemo1.args = { };

//
//
// stories.add('theme', () => <Button type={"primary"} theme={"solid"}>UI semi</Button>);
// stories.add('secondary', () => <Button type={"secondary"}>123</Button>);
// stories.add('warning', () => <Button type={"warning"}>123</Button>);
// stories.add('Danger', () => <Button type={"danger"}>hello button</Button>);
// stories.add('Warning', () => <Button type="warning">hello button</Button>);
// stories.add('icon', () => <>
//   <Button aria-label='Button demo' icon={<IconTick/>}>hello button</Button>
//   <br/>
//   <br/>
//   <Button aria-label='Button demo' icon={<IconEdit/>} noHorizontalPadding={false}>
//     Edit me
//   </Button>
//   <br/>
//   <br/>
//   <Button aria-label='Button demo' icon={<IconUser/>}/>
// </>);
//
// stories.add('ButtonGroup', () => <ButtonGroup type={'danger'} theme={'solid'}>
//   <Button icon={<IconEdit />}>
//     编辑
//   </Button>
//   <Button icon={<IconDelete/>}>
//     删除
//   </Button>
//   <Button icon={<IconClose/>}>
//     关闭
//   </Button>
// </ButtonGroup>);
//
// stories.add('SplitButtonGroup', () => <SplitButtonGroup style={{marginRight:10}}>
//   <Button theme="solid" type="primary">分裂按钮</Button>
//   <Dropdown menu={[
//     { node: 'item', name: '编辑项目', onClick: () => console.log('编辑项目点击') },
//     { node: 'item', name: '重置项目' },
//     { node: 'divider' },
//     { node: 'item', name: '复制项目' },
//     { node: 'item', name: '从项目创建模版' },
//     { node: 'divider' },
//     { node: 'item', name: '删除项目', type: 'danger' },
//   ]} trigger="click" position="bottomRight">
//     <Button style={{padding:'8px 4px'}} theme="solid" type="primary" icon={<IconTreeTriangleDown />} />
//   </Dropdown>
// </SplitButtonGroup>);
//
//
