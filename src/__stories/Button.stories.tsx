import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf} from '@storybook/vue3';
import {Button} from "@kousum/semi-ui-vue";
import '@kousum/semi-ui-vue/lib/_base/base.css'
import {IconClose, IconEdit, IconTick, IconUser,IconDelete} from "@kousum/semi-icons-vue";
import ButtonGroup from "@kousum/semi-ui-vue/lib/button/ButtonGroup";


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
  <Button aria-label='Button demo' icon={<IconEdit/>} noHorizontalPadding={false}>
    Edit me
  </Button>
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
