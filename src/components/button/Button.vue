<template>
  <button
    :disabled="props?.disabled"
    @click="click"
    class="basic-button"
    :class="[
      variant,
      props?.fullWidth === true ? 'fullWidth' : '',
      props?.disabled ? 'disable-button' : ''
    ]"
  >
    {{ props?.text }}
    <component :is="props?.hasStartIcon ? icon : empty" v-bind="currentProperties"></component>
  </button>
</template>
<script lang="ts">
import { type PropType, defineComponent } from 'vue'
import type { ButtonPropsType } from './type'
import { IconEmpty, IconAdd, IconAddCircle } from '../icons'

export default defineComponent({
  name: 'Button',
  props: { props: Object as PropType<ButtonPropsType> },
  data() {
    return {
      empty: IconEmpty,
      icon: this.props?.variant === 'contained' ? IconAddCircle : IconAdd
    }
  },
  components: {
    IconAddCircle,
    IconAdd
  },
  computed: {
    currentProperties: function () {
      if (this.props?.variant === 'text') {
        return { color: this.props?.color ?? '#4F73D0' }
      }
    },
    click() {
      return this.props?.onClick
    },
    variant() {
      return this.props?.variant === 'contained' ? 'contained' : 'text'
    }
    // icon() {
    //   return this.props?.variant === 'contained' ? IconAddCircle : IconAdd
    // }
  }
})
</script>
<style>
.basic-button {
  border: none;
  outline: none;
  border-radius: 24px;
}
.text {
  background-color: white;
  color: var(--blue, #4f73d0);
  height: fit-content;
}
.outline {
  border: 1px solid var(--blue, #4f73d0);
  color: var(--blue, #4f73d0);
  background-color: white;
}
.contained {
  padding: 8px 16px;
  background-color: var(--blue, #4f73d0);
  color: white;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.08);
  height: 40px;
}
.contained:hover {
  background-color: var(--blue, #4f73d0);
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
.contained:active {
  background: var(--dark-blue, #224dba);
}
.fullWidth {
  width: 100%;
}
.disable-button {
  color: rgba(231, 231, 231, 1);
}
</style>
