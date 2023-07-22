<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Textarea',
  emits: ['onChange'],
  props: {
    title: Object as PropType<string>
  },
  methods: {
    handleChange(e) {
      console.log(this.$refs.textarea.value)
      this.$emit('onChange', this.$refs.textarea.value)
    }
  }
})
</script>
<template>
  <div class="mb-3">
    <label for="textarea-input" class="ml-8px form-label text-size-bold-12 text-color-black-1">{{
      title
    }}</label>
    <textarea
      ref="textarea"
      class="form-control custom-textarea"
      id="textarea-input"
      rows="5"
      @change="handleChange"
    ></textarea>
  </div>
</template>
<style>
.form-label {
  margin-bottom: 0.25rem;
}
.custom-textarea {
  border-radius: 8px;
  border: 1px solid var(--light-gray, #e7e7e7);
  background: var(--input-background, #fdfdfd);
  padding: 12px 16px;
}

.custom-textarea:focus {
  border: 1px solid var(--gray, #9d9d9d);
  background: var(--input-background, #fdfdfd);
  box-shadow: none;
}
</style>
