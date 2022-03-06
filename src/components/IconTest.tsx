import {defineComponent, ref, h, onMounted,} from 'vue'
import * as icons  from "@kousum/semi-icons-vue";
import {Col, Row} from "@kousum/semi-ui-vue";

export interface ExampleProps {
  name?: string
}

export const VuePropsType = {
  name: String
}

const App = defineComponent<ExampleProps>((props, {slots}) => {

  const domArr = ref<{vNode:JSX.Element,name:string}[]>([])

  onMounted(()=>{
    const iconsObj:any = icons;
    for(let i in icons){
      const Dom = iconsObj[i];
      domArr.value.push({vNode:<Dom size={'extra-large'} />,name:Dom.name})
    }
  })
  return () => (
    <div id={'a'}  style={{color:'#E91E63', display:'flex', flexWrap:'wrap',}}>
      <Row gutter={{xs:16,sm:16,md:16,lg:24,xl:24,xxl:24}}>
        {domArr.value.map((item, index)=>{
          return (
            <Col xs={24} sm={12} md={12} lg={6}>
              <div key={index} style={{}}>
                {item.vNode}：
                {item.name}
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
})


App.props = VuePropsType

export default App
