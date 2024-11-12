import * as _nuxt_schema from '@nuxt/schema';
import { OptionPlugin } from './runtime/vue/index.ts';

interface ModuleOptions extends OptionPlugin {
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

declare module '@nuxt/schema' {
    interface ConfigSchema {
        publicRuntimeConfig?: {
            chatwoot?: ModuleOptions;
        };
    }
}

export { type ModuleOptions, _default as default };
