export declare function useChatWoot(): {
    isModalVisible: import("vue").Ref<boolean>;
    toggle: (state: "open" | "close" | undefined) => void;
    setUser: (key: string, args: import("../vue/vue").ChatwootSetUserProps) => void;
    setCustomAttributes: (attributes: {
        [key: string]: string;
    }) => void;
    setConversationCustomAttributes: (attributes: {
        [key: string]: string;
    }) => void;
    deleteCustomAttribute: (attributes: string) => void;
    setLocale: (local: string) => void;
    setLabel: (label: string) => void;
    removeLabel: (label: string) => void;
    reset: () => void;
    toggleBubbleVisibility: (visibility: "hide" | "show") => void;
    popoutChatWindow: () => void;
};
