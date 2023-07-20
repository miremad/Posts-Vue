<template>
  <div class="tag my-1">
    <span class="text-color-gray text-size-reg-10">{{ text }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Tag',
  props: {
    text: Object as PropType<string>
  }
})
</script>
<style>
.tag {
  padding: 4px 12px;
  border-radius: 24px;
  border: 1px solid var(--light-gray, #e7e7e7);
  width: fit-content;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.25rem;
}
</style>
