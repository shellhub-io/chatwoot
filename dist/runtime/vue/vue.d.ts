import type { App } from 'vue';
declare global {
    interface Window {
        chatwootSettings: ChatwootSettings;
        chatwootSDK: ChatwootSdk;
        $chatwoot: Chatwoot;
    }
}
export interface ScriptLoaderOption extends Partial<HTMLScriptElement> {
    partytown: boolean;
}
export declare function loadScript(source: string, options?: ScriptLoaderOption): Promise<unknown>;
export interface ChatwootSetUserProps {
    name?: string;
    avatar_url?: string;
    email?: string;
    identifier_hash?: string;
    phone_number?: string;
    description?: string;
    country_code?: string;
    city?: string;
    company_name?: string;
    social_profiles?: {
        twitter?: string;
        linkedin?: string;
        facebook?: string;
        github?: string;
    };
}
interface ChatwootInit {
    /**
     * Token
     * @type string
     */
    websiteToken: string;
    /**
     * Base url
     * @default 'https://app.chatwoot.com'
     * @type string
     *
     */
    baseUrl?: string;
}
/**
 *
 * https://www.chatwoot.com/docs/product/channels/live-chat/sdk/setup/#sdk-settings
 *
 */
export interface ChatwootSettings {
    hideMessageBubble?: boolean;
    position?: 'left' | 'right';
    /**
     * Chat Widget Language
     * @default 'en'
     * @type Locale
     *
     */
    locale?: 'en' | Locale;
    type?: 'standard' | 'expanded_bubble';
    /**
     * Chat with us title
     * @default 'Chat with us'
     * @type string
     *
     */
    launcherTitle?: string;
    /**
     * Theme
     * @default 'auto'
     * @type 'light' | 'auto'
     *
     */
    darkMode?: 'light' | 'auto';
    showPopoutButton?: boolean;
}
export interface ChatwootSdk {
    run: (init: ChatwootInit) => void;
}
/**
 *
 * https://github.com/chatwoot/chatwoot/blob/develop/app/javascript/packs/sdk.js#L21
 *
 *
 */
export interface Chatwoot {
    isModalVisible: boolean;
    toggle: (state?: 'open' | 'close') => void;
    setUser: (key: string, args: ChatwootSetUserProps) => void;
    setCustomAttributes: (attributes: {
        [key: string]: string;
    }) => void;
    setConversationCustomAttributes: (attributes: {
        [key: string]: string;
    }) => void;
    deleteCustomAttribute: (key: string) => void;
    setLocale: (local: string) => void;
    setLabel: (label: string) => void;
    removeLabel: (label: string) => void;
    reset: () => void;
    toggleBubbleVisibility: (visibility: 'hide' | 'show') => void;
    popoutChatWindow: () => void;
}
type Locale = 'ar' | 'ca' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'fa' | 'fi' | 'fr' | 'hi' | 'hu' | 'id' | 'it' | 'ja' | 'ko' | 'ml' | 'nl' | 'no' | 'pl' | 'pt_BR' | 'pt' | 'ro' | 'ru' | 'sk' | 'sv' | 'ta' | 'th' | 'tr' | 'uk' | 'vi' | 'zh_CN' | 'zh_TW';
export interface OptionPlugin {
    /**
     * ChatwootInit options
     * @type ChatwootInit
     */
    init: ChatwootInit;
    /**
     * Chatwoot Settings
     * @type ChatwootSettings
     */
    settings?: ChatwootSettings;
    /**
     * Partytown support
     * @default false
     * @type boolean
     * @link https://partytown.builder.io/how-does-partytown-work
     */
    partytown?: boolean;
}
export declare function createChatWoot(options: OptionPlugin): {
    install(app: App): void;
};
export declare function useChatWoot(): {
    isModalVisible: import("vue").Ref<boolean, boolean>;
    toggle: (state: Parameters<Chatwoot["toggle"]>[0]) => void;
    setUser: (key: Parameters<Chatwoot["setUser"]>[0], args: Parameters<Chatwoot["setUser"]>[1]) => void;
    setCustomAttributes: (attributes: Parameters<Chatwoot["setCustomAttributes"]>[0]) => void;
    setConversationCustomAttributes: (attributes: Parameters<Chatwoot["setConversationCustomAttributes"]>[0]) => void;
    deleteCustomAttribute: (attributes: Parameters<Chatwoot["deleteCustomAttribute"]>[0]) => void;
    setLocale: (local: Parameters<Chatwoot["setLocale"]>[0]) => void;
    setLabel: (label: Parameters<Chatwoot["setLabel"]>[0]) => void;
    removeLabel: (label: Parameters<Chatwoot["removeLabel"]>[0]) => void;
    reset: () => void;
    toggleBubbleVisibility: (visibility: Parameters<Chatwoot["toggleBubbleVisibility"]>[0]) => void;
    popoutChatWindow: () => void;
};
declare module 'vue' {
    interface ComponentCustomProperties {
        $chatwoot: OptionPlugin;
    }
}
export {};
