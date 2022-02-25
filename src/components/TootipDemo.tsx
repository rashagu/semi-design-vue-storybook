import {defineComponent, ref, h, onActivated, Fragment} from 'vue'
import { Tooltip }  from "@kousum/semi-ui-vue";
interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const TootipDemo = defineComponent<ExampleProps>((props, {slots}) => {

  return ()=>(
    <div>
      <div>
        <Tooltip content={'hi bytedance'} motion trigger={'click'}>
          <div style={{color:'red'}}>click</div>
        </Tooltip>
      </div>
      <div>
        <Tooltip content={'hi bytedance'} motion>
          <div style={{color:'red'}}>hover</div>
        </Tooltip>
      </div>
      <div>
        <Tooltip content={'hi bytedance'} motion trigger={'focus'}>
          <input />
        </Tooltip>
      </div>
    </div>
  );
})

TootipDemo.props = vuePropsType

export default TootipDemo

