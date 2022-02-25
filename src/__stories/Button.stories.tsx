import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf} from '@storybook/vue3';
import {Button, Dropdown} from "@kousum/semi-ui-vue";
import '@kousum/semi-ui-vue/lib/_base/base.css'
import {IconClose, IconEdit, IconTick, IconUser, IconDelete, IconTreeTriangleDown} from "@kousum/semi-icons-vue";
import ButtonGroup from "@kousum/semi-ui-vue/lib/button/ButtonGroup";
import SplitButtonGroup from "@kousum/semi-ui-vue/lib/button/SplitButtonGroup";


const stories = storiesOf('Button', module);

stories.add('Primary', () => <Button type={"primary"}>UI semi</Button>);
stories.add('theme', () => <Button type={"primary"} theme={"solid"}>UI semi</Button>);
stories.add('secondary', () => <Button type={"secondary"}>123</Button>);
stories.add('warning', () => <Button type={"warning"}>123</Button>);
stories.add('Danger', () => <Button type={"danger"}>hello button</Button>);
stories.add('Warning', () => <Button type="warning">hello button</Button>);
stories.add('icon', () => <>
  <Button aria-label='Button demo' icon={<IconTick/>}>hello button</Button>
  <br/>
  <br/>
  <Button aria-label='Button demo' icon={<IconEdit/>} noHorizontalPadding={false}>
    Edit me
  </Button>
  <br/>
  <br/>
  <Button aria-label='Button demo' icon={<IconUser/>}/>
</>);

stories.add('ButtonGroup', () => <ButtonGroup type={'danger'} theme={'solid'}>
  <Button icon={<IconEdit />}>
    编辑
  </Button>
  <Button icon={<IconDelete/>}>
    删除
  </Button>
  <Button icon={<IconClose/>}>
    关闭
  </Button>
</ButtonGroup>);

stories.add('SplitButtonGroup', () => <SplitButtonGroup style={{marginRight:10}}>
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
</SplitButtonGroup>);


