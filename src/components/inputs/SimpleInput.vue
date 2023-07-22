<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SimpleInput',
  emits: ['onChange'],
  props: {
    title: Object as PropType<string>
  },
  methods: {
    handleChange(e) {
      console.log(this.$refs.simpleInput.value)
      this.$emit('onChange', this.$refs.simpleInput.value)
    }
  }
})
</script>
<template>
  <div class="mb-3">
    <label
      for="exampleFormControlInput1"
      class="ml-8px form-label text-size-bold-12 text-color-black-1"
      >{{ title }}</label
    >
    <input
      type="text"
      class="form-control text-input text-size-reg-14 text-color-black-1"
      id="exampleFormControlInput1"
      ref="simpleInput"
      @change="handleChange"
    />
  </div>
</template>
<style>
.form-label {
  margin-bottom: 0.25rem;
}
.text-input {
  border-radius: 8px;
  border: 1px solid var(--light-gray, #e7e7e7);
  background: var(--input-background, #fdfdfd);
  height: 40px;
  padding: 12px 16px;
}

.text-input:focus {
  border: 1px solid var(--gray, #9d9d9d);
  background: var(--input-background, #fdfdfd);
  box-shadow: none;
}
</style>
