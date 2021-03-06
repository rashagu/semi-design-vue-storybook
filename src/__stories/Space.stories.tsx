import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf, Meta, Story} from '@storybook/vue3';
import {Button, Dropdown, DropdownMenu, DropdownItem, DropdownDivider, Space,} from "@kousum/semi-ui-vue";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";
import Layout, {LayoutContent, LayoutFooter, LayoutHeader, LayoutSider} from "@kousum/semi-ui-vue/lib/layout";


export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Space',
  component: Dropdown,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    onClick: { action: 'clicked' },
    theme: {
      options: ['light', 'solid'],
      control: { type: 'select' },
    },
  },
} as Meta<ButtonProps>;
//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  components: { Button },
  setup(){
    return ()=>
      <div>
        <Space align='baseline'>
          <Button onClick={()=>{alert('button')}}>ๆ้ฎ</Button>
          <Button>ๆ้ฎ</Button>
          <div style={{
            width: 100,
            height: 100,
            backgroundColor:'lightblue',
            display: 'flex',
            alignItems: 'center'
          }}>div</div>
          <div>asd</div>
        </Space>
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
