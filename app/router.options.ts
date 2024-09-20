import type { RouterConfig } from '@nuxt/schema'
import { createMemoryHistory } from 'vue-router'

export default <RouterConfig> {
  history: process.client ? createMemoryHistory : undefined
}