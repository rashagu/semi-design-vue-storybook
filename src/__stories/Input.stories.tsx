import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf, Meta, Story} from '@storybook/vue3';
import {Input, TextArea,Text} from "@kousum/semi-ui-vue";
import {IconClose, IconEdit, IconTick, IconUser, IconDelete, IconTreeTriangleDown} from "@kousum/semi-icons-vue";
import {ButtonGroup, SplitButtonGroup} from "@kousum/semi-ui-vue";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";
import {InputProps} from "@kousum/semi-ui-vue/lib/input";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input',
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    // theme: {
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
    //👇 Now all Button stories will be primary.
    // block: false, loading: false, circle: false,
  },
} as Meta<InputProps>;
//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  setup(){
    const defaultValue = ref('asd')
    return ()=><div>

      {defaultValue.value}
      <br/><br/>
      <Input disabled suffix={<Text strong type='secondary' style={{ marginRight: 8 }}>Suffix</Text>} showClear></Input>
      <br/><br/>
      <Input showClear mode={'password'} placeholder={'click to clear'}></Input>
      <br/><br/>
      <Input showClear defaultValue={'defaultValue.value'} value={defaultValue.value}  placeholder={'click to clear'}></Input>
      <br/><br/>
      <Input showClear defaultValue={defaultValue.value} placeholder={'click to clear'}></Input>
      <br/><br/>
      <TextArea defaultValue={defaultValue.value} placeholder={'请输入'} />
      <br/><br/>
      <TextArea value={defaultValue.value} placeholder={'请输入'} />
      <br/><br/>
      <TextArea v-model={[defaultValue.value,'value']} placeholder={'请输入'} />
      <br/><br/>
      <TextArea maxCount={100} showClear/>

      <br/><br/>
      <Input defaultValue='ies' validateStatus='warning'></Input>
      <br/><br/>
      <br/><br/>
      <Input defaultValue='ies' validateStatus='error'></Input>
      <br/><br/>
      <Input defaultValue='ies'></Input>
      <br/><br/>
    </div>
  },
});
export const Primary = Template.bind({});
Primary.args = { type: 'primary', };

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
