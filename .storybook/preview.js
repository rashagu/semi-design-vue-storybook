import "../src/docDemo.css"
import "../src/tailwind.min.css"
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
