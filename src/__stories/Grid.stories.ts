// Button.stories.js
import {Button, Row ,Col} from "@kousum/semi-ui-vue";
import {Story} from "@storybook/vue3";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Grid',
  component: Button,
};


//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args:any) => ({
  components: { Button,Row ,Col},
  setup() {
    return { args };
  },
  template: `
    <div class="grid grid-gutter">
    <Row :gutter="[16, 24]">
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
      <Col :span="6">
        <div class="col-content">col-6</div>
      </Col>
    </Row>
    <br/>
    <Row type="flex" justify="center">
      <Col :span="4"><div class="col-content">col-4</div></Col>
      <Col :span="4"><div class="col-content">col-4</div></Col>
      <Col :span="4"><div class="col-content">col-4</div></Col>
      <Col :span="4"><div class="col-content">col-4</div></Col>
    </Row>
    <Row>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="col-content">Col</div></Col>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="col-content">Col</div></Col>
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="col-content">Col</div></Col>
    </Row>
    </div>
  `,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { type:'primary',theme:'solid' };
