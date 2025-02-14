export declare function useChatWoot(): {
    isModalVisible: import("vue").Ref<boolean, boolean>;
    toggle: (state: Parameters<import("../vue/vue").Chatwoot["toggle"]>[0]) => void;
    setUser: (key: Parameters<import("../vue/vue").Chatwoot["setUser"]>[0], args: Parameters<import("../vue/vue").Chatwoot["setUser"]>[1]) => void;
    setCustomAttributes: (attributes: Parameters<import("../vue/vue").Chatwoot["setCustomAttributes"]>[0]) => void;
    setConversationCustomAttributes: (attributes: Parameters<import("../vue/vue").Chatwoot["setConversationCustomAttributes"]>[0]) => void;
    deleteCustomAttribute: (attributes: Parameters<import("../vue/vue").Chatwoot["deleteCustomAttribute"]>[0]) => void;
    setLocale: (local: Parameters<import("../vue/vue").Chatwoot["setLocale"]>[0]) => void;
    setLabel: (label: Parameters<import("../vue/vue").Chatwoot["setLabel"]>[0]) => void;
    removeLabel: (label: Parameters<import("../vue/vue").Chatwoot["removeLabel"]>[0]) => void;
    reset: () => void;
    toggleBubbleVisibility: (visibility: Parameters<import("../vue/vue").Chatwoot["toggleBubbleVisibility"]>[0]) => void;
    popoutChatWindow: () => void;
};
