import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf} from '@storybook/vue3';
import {Button} from "@kousum/semi-ui-vue";
import '@kousum/semi-ui-vue/lib/_base/base.css'
import {IconEdit, IconTick, IconUser} from "@kousum/semi-icons-vue";


const stories = storiesOf('Button', module);

stories.add('base', () => <Button>123</Button>);
stories.add('Primary', () => <Button type="primary">UI semi</Button>);
stories.add('Danger', () => <Button type="danger">hello button</Button>);
stories.add('Warning', () => <Button type="warning">hello button</Button>);
stories.add('Danger', () => <>
  <Button aria-label='Button demo' icon={<IconTick/>}>hello button</Button>
  <br/>
  <Button aria-label='Button demo' icon={<IconEdit/>} noHorizontalPadding={false}>
    Edit me
  </Button>
  <Button aria-label='Button demo' icon={<IconUser/>}/>
</>);
