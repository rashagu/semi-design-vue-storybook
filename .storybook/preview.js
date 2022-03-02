import "../src/docDemo.css"
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
export const parameters = {
  // layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
