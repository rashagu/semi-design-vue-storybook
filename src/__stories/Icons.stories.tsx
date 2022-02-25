import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {storiesOf} from '@storybook/vue3';
import '@kousum/semi-ui-vue/lib/_base/base.css'
import {Button} from "@kousum/semi-ui-vue";
import IconTest from "../components/IconTest";


const stories = storiesOf('Icons', module);



stories.add('All', () => <IconTest />);

