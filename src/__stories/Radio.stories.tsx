import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf, Meta, Story} from '@storybook/vue3';
import {Radio, RadioGroup,Space} from "@kousum/semi-ui-vue";
import {RadioProps} from "@kousum/semi-ui-vue/lib/radio/Radio";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Radio',
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
} as Meta<RadioProps>;
//👇 We create a “template” of how args map to rendering
const Template: Story<RadioProps> = (args: RadioProps) => ({
  setup(){
    const value = ref(1)
    return ()=><div>

      <h4>单选示例</h4>
      <Radio aria-label="单选示例">Radio</Radio>
      <br/>
      <br/>
      <h4>v-model</h4>
      <RadioGroup aria-label="单选组合示例" v-model={[value.value, 'value']}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
      <br/>
      <br/>
      <h4>defaultValue</h4>
      <RadioGroup aria-label="单选组合示例" defaultValue={value.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
      <br/>
      <br/>
      <Space vertical spacing='loose' align='start'>
        <RadioGroup type='button' buttonSize='small' defaultValue={1} aria-label="单选组合示例">
          <Radio value={1}>即时推送</Radio>
          <Radio value={2}>定时推送</Radio>
          <Radio value={3}>动态推送</Radio>
        </RadioGroup>
        <RadioGroup type='button' buttonSize='middle' defaultValue={1} aria-label="单选组合示例">
          <Radio value={1}>即时推送</Radio>
          <Radio value={2}>定时推送</Radio>
          <Radio value={3}>动态推送</Radio>
        </RadioGroup>
        <RadioGroup type='button' buttonSize='large' defaultValue={1} aria-label="单选组合示例">
          <Radio value={1}>即时推送</Radio>
          <Radio value={2}>定时推送</Radio>
          <Radio value={3}>动态推送</Radio>
        </RadioGroup>
      </Space>
      <br/>
      <br/>
    </div>
  },
});
export const Primary = Template.bind({});
Primary.args = {  };

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
