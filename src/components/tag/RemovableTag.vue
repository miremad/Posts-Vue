<template>
  <div
    class="tag my-1"
    :class="isHover === true ? ' tag-border-hover' : ' tag-border'"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <span
      class="text-size-reg-14"
      :class="isHover === true ? 'text-color-black-1' : 'text-color-gray'"
      ><IconClose
        @click="removeTagFunc(index)"
        :color="isHover ? 'var(--black, #2D2D2D)' : 'var(--gray, #9D9D9D)'"
      />
      {{ text }}</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { IconClose } from '../icons'

export default defineComponent({
  name: 'RemovableTag',
  emits: ['removeTag'],
  data() {
    return {
      isHover: false
    }
  },
  props: {
    index: Object as PropType<number>,
    text: Object as PropType<string>
  },
  components: {
    IconClose
  },
  methods: {
    removeTagFunc(index: number) {
      this.$emit('removeTag', index)
    },
    hover(payload: MouseEvent) {
      console.log('hover')

      this.$data.isHover = true
    },
    leave(payload: MouseEvent) {
      console.log('leave')
      this.$data.isHover = false
    }
  }
})
</script>
<style>
.tag {
  padding: 4px 12px;
  border-radius: 24px;
  width: fit-content;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.25rem;
}

.tag-border {
  border: 1px solid var(--light-gray, #e7e7e7);
}
.tag-border-hover {
  border: 1px solid var(--gray, #9d9d9d);
}
</style>
