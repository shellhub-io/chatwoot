import * as _nuxt_schema from '@nuxt/schema';
import { OptionPlugin } from '../dist/runtime/vue/index.js';

interface ModuleOptions extends OptionPlugin {
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions, ModuleOptions, false>;

declare module '@nuxt/schema' {
    interface ConfigSchema {
        publicRuntimeConfig?: {
            chatwoot?: ModuleOptions;
        };
    }
}

export { type ModuleOptions, _default as default };
