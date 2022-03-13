<script setup lang="ts">
import { ref } from 'vue'
import {Button, Input, RadioGroup,Popover} from "@kousum/semi-ui-vue";
import AreaSelect from "./areaSelect/AreaSelect";

defineProps<{ msg: string }>()

function onChange() {

}
const count = ref(0)
</script>

<template>
  <div>
    <Button>Button</Button>
    <Popover :content="123" >
      <Button>{pos}</Button>
    </Popover>
    <div style="width: 30%">
      <AreaSelect :defaultValue="''" @change="onChange"/>
    </div>
  </div>
</template>

<style scoped>
</style>
