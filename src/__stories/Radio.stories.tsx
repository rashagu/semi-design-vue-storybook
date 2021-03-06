import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf, Meta, Story} from '@storybook/vue3';
import {Radio, RadioGroup,Space} from "@kousum/semi-ui-vue";
import {RadioProps} from "@kousum/semi-ui-vue/lib/radio/Radio";


export default {
  /* ๐ The title prop is optional.
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
    //๐ Now all Button stories will be primary.
    // block: false, loading: false, circle: false,
  },
} as Meta<RadioProps>;
//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<RadioProps> = (args: RadioProps) => ({
  setup(){
    const value = ref(1)
    return ()=><div>

      <h4>ๅ้็คบไพ</h4>
      <Radio aria-label="ๅ้็คบไพ">Radio</Radio>
      <br/>
      <br/>
      <h4>v-model</h4>
      <RadioGroup aria-label="ๅ้็ปๅ็คบไพ" v-model={[value.value, 'value']}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
      <br/>
      <br/>
      <h4>defaultValue</h4>
      <RadioGroup aria-label="ๅ้็ปๅ็คบไพ" defaultValue={value.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
      <br/>
      <br/>
      <Space vertical spacing='loose' align='start'>
        <RadioGroup type='button' buttonSize='small' defaultValue={1} aria-label="ๅ้็ปๅ็คบไพ">
          <Radio value={1}>ๅณๆถๆจ้</Radio>
          <Radio value={2}>ๅฎๆถๆจ้</Radio>
          <Radio value={3}>ๅจๆๆจ้</Radio>
        </RadioGroup>
        <RadioGroup type='button' buttonSize='middle' defaultValue={1} aria-label="ๅ้็ปๅ็คบไพ">
          <Radio value={1}>ๅณๆถๆจ้</Radio>
          <Radio value={2}>ๅฎๆถๆจ้</Radio>
          <Radio value={3}>ๅจๆๆจ้</Radio>
        </RadioGroup>
        <RadioGroup type='button' buttonSize='large' defaultValue={1} aria-label="ๅ้็ปๅ็คบไพ">
          <Radio value={1}>ๅณๆถๆจ้</Radio>
          <Radio value={2}>ๅฎๆถๆจ้</Radio>
          <Radio value={3}>ๅจๆๆจ้</Radio>
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
//     ็ผ่พ
//   </Button>
//   <Button icon={<IconDelete/>}>
//     ๅ?้ค
//   </Button>
//   <Button icon={<IconClose/>}>
//     ๅณ้ญ
//   </Button>
// </ButtonGroup>);
//
// stories.add('SplitButtonGroup', () => <SplitButtonGroup style={{marginRight:10}}>
//   <Button theme="solid" type="primary">ๅ่ฃๆ้ฎ</Button>
//   <Dropdown menu={[
//     { node: 'item', name: '็ผ่พ้กน็ฎ', onClick: () => console.log('็ผ่พ้กน็ฎ็นๅป') },
//     { node: 'item', name: '้็ฝฎ้กน็ฎ' },
//     { node: 'divider' },
//     { node: 'item', name: 'ๅคๅถ้กน็ฎ' },
//     { node: 'item', name: 'ไป้กน็ฎๅๅปบๆจก็' },
//     { node: 'divider' },
//     { node: 'item', name: 'ๅ?้ค้กน็ฎ', type: 'danger' },
//   ]} trigger="click" position="bottomRight">
//     <Button style={{padding:'8px 4px'}} theme="solid" type="primary" icon={<IconTreeTriangleDown />} />
//   </Dropdown>
// </SplitButtonGroup>);
//
//
