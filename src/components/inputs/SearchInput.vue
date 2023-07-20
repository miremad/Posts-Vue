<script lang="ts">
import { defineComponent } from 'vue'
import { IconSearch } from '@/components/icons'
export default defineComponent({
  name: 'SearchInput',
  emits: ['onChange'],
  components: {
    IconSearch
  },
  mounted() {},
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleChange(e) {
      console.log(this.$refs.input.value)
      this.$emit('onChange', this.$refs.input.value)
    }
  },
  computed: {
    IconColor() {
      return this.value.length > 0 ? 'rgba(45, 45, 45, 1)' : '#9D9D9D'
    }
  }
})
</script>
<template>
  <div class="input-group mb-3" id="search-input-box">
    <span class="input-group-text" id="basic-addon1 search-icon-box"
      ><IconSearch :color="value.length > 0 ? 'rgba(45, 45, 45, 1)' : '#9D9D9D'"
    /></span>
    <input
      v-model="value"
      ref="input"
      type="text"
      class="form-control search-input text-size-reg-14 text-color-gray px-0"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="basic-addon1"
      @keyup="handleChange"
    />
  </div>
</template>
<style>
.input-group-text {
  background-color: white;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  border-right-color: 1px solid white;
}
.search-input {
  border: none;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
}
.search-input:focus {
  border: none;
  box-shadow: none;
}
#search-input-box:focus-within {
  border: 1px solid var(--gray, #9d9d9d);
}
.search-input::placeholder {
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--gray, #9d9d9d);
}
#search-input-box {
  border: 1px solid var(--light-gray, #e7e7e7);
  border-radius: 24px;
  height: 40px;
}
#search-input-box:hover {
  border: 1px solid var(--gray, #9d9d9d);
}
#search-input-box:focus {
  border: 1px solid var(--gray, #9d9d9d);
}
.input-group-text {
  border: none;
}
</style>
