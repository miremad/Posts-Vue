<script lang="ts">
import { defineComponent } from 'vue'
import { RemovableTag } from '@/components/tag'
import { Button } from '../button'
export default defineComponent({
  name: 'TagsInput',
  emits: ['onChange'],
  props: {
    title: Object as PropType<string>
  },
  data() {
    return {
      tags: [],
      value: ''
    }
  },
  components: {
    RemovableTag,
    Button
  },
  computed: {
    isDisabled() {
      return this.value.length === 0
    }
  },
  methods: {
    handleChange() {
      this.$emit('onChange', this.tags)
    },

    getSingleTag: function () {
      if (this.value.length > 0) {
        this.tags.push(this.value)
        this.value = ''
        this.handleChange()
      }
    },
    removeTag: function (index: number) {
      console.log('remove input', index)

      this.tags = this.tags.filter((item, i) => i !== index)
    }
  }
})
</script>
<template>
  <div class="mb-3">
    <label for="tags-input" class="ml-8px form-label text-size-bold-12 text-color-black-1">{{
      title
    }}</label>
    <div class="position-relative">
      <input
        v-model="value"
        ref="input"
        type="text"
        class="form-control text-input text-size-reg-14 text-color-black-1"
        id="tags-input"
        @keyup.enter="getSingleTag"
      />
      <div class="add-button">
        <Button
          :props="{
            fullWidth: false,
            onClick: getSingleTag,
            text: 'Add',
            variant: 'text',
            hasStartIcon: true,
            color: isDisabled ? 'rgba(231, 231, 231, 1)' : '#4F73D0',
            disabled: isDisabled
          }"
        />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12">
        <div v-for="(tag, index) in tags">
          <RemovableTag @removeTag="removeTag" :text="tag" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.add-button {
  position: absolute;
  top: 5px;
  right: 5px;
}
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
