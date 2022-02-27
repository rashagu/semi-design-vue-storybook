<script setup lang="ts">
import { ref } from 'vue'
import {Button} from "@kousum/semi-ui-vue";

defineProps<{ label?: string, background?: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <Button :style="{background:background}">{{ label }}</Button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
