import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf} from '@storybook/vue3';
import {Button, Tooltip} from "@kousum/semi-ui-vue";


const stories = storiesOf('Tooltip', module);




stories.add('default', () => <div style={{padding:'0 10%'}}>
  <Tooltip content={'hi bytedance'} motion>
    <span style={{color:'red'}}>hover</span>
  </Tooltip>
</div>);

stories.add('click', () => <div style={{padding:'0 10%'}}>
  <Tooltip content={'hi bytedance'} motion trigger={'click'}>
    <span style={{color:'red'}}>click</span>
  </Tooltip>
</div>);

stories.add('focus', () => <div style={{padding:'0 10%'}}>
  <Tooltip content={'hi bytedance'} motion trigger={'focus'}>
    <input />
  </Tooltip>
</div>);
