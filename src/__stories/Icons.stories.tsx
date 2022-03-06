import {defineComponent, ref, h, StyleValue, Fragment} from 'vue'
import {Meta, storiesOf, Story} from '@storybook/vue3';
import IconTest from "../components/IconTest";
import string from "async-validator/dist-types/validator/string";
import {Button} from "@kousum/semi-ui-vue";
import {ButtonProps} from "@kousum/semi-ui-vue/lib/button";
import {IconEdit, IconProps} from "@kousum/semi-icons-vue";




const stories = storiesOf('Icons', module);


stories.addParameters(()=>{
  return {}
})
stories.add('All', () => <IconTest />,{ });

