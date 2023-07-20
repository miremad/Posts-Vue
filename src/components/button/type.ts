import type { Component } from 'vue'

export type ButtonPropsType = {
  onClick: () => void
  variant: 'text' | 'contained'
  hasStartIcon?: boolean
  text: string
  fullWidth: boolean
  color?: string
  disabled: boolean
}
