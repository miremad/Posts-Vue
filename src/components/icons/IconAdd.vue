<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clip-path="url(#clip0_1702_73)">
      <path
        d="M11.9999 8.66668H8.66659V12C8.66659 12.3667 8.36659 12.6667 7.99992 12.6667C7.63325 12.6667 7.33325 12.3667 7.33325 12V8.66668H3.99992C3.63325 8.66668 3.33325 8.36668 3.33325 8.00001C3.33325 7.63334 3.63325 7.33334 3.99992 7.33334H7.33325V4.00001C7.33325 3.63334 7.63325 3.33334 7.99992 3.33334C8.36659 3.33334 8.66659 3.63334 8.66659 4.00001V7.33334H11.9999C12.3666 7.33334 12.6666 7.63334 12.6666 8.00001C12.6666 8.36668 12.3666 8.66668 11.9999 8.66668Z"
        :fill="color"
      />
    </g>
    <defs>
      <clipPath id="clip0_1702_73">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  mounted() {
    console.log('svg', this.$props.color)
  },
  props: {
    color: Object as PropType<string>
  }
})
</script>
