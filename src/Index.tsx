import {defineComponent, ref, h, Fragment} from 'vue'
import Area from '../src/__stories/AreaSelect'

interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const Index = defineComponent<ExampleProps>((props, {slots}) => {

  const defaultValue = ref('')

  function onChange(v:any) {
    console.log(v)
  }

  return () => (
    <div>
      <Area defaultValue={defaultValue.value} onChange={onChange} />
    </div>
  )
})

Index.props = vuePropsType

export default Index

