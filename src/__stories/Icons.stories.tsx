import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf} from '@storybook/vue3';
import IconTest from "../components/IconTest";


const stories = storiesOf('Icons', module);



stories.add('All', () => <IconTest />);

