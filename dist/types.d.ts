
import type { ModuleOptions } from './module'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['chatwoot']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['chatwoot']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['chatwoot']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['chatwoot']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module'
