<template>
  <button class="back-button" @click="handleBack"><IconBack /></button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { IconBack } from '../icons'

export default defineComponent({
  name: 'BackButton',
  methods: {
    handleBack() {
      this.$router.go(-1)
    }
  },
  components: {
    IconBack
  }
})
</script>
<style>
.back-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 8px;
  border-radius: 100%;
  border: 1px solid var(--light-gray, #e7e7e7);
}
</style>
