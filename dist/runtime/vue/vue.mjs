import defu from "defu";
import { onBeforeUnmount, onMounted, ref } from "vue";
export function loadScript(source, options = {}) {
  return new Promise((resolve, reject) => {
    const head = document.head || document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    const {
      src,
      type = options.partytown ? "text/partytown" : "text/javascript",
      defer = false,
      async = false,
      ...restAttrs
    } = options;
    script.type = type;
    script.defer = defer;
    script.async = async;
    script.src = src || source;
    Object.keys(restAttrs).forEach((key) => {
      script[key] = restAttrs[key];
    });
    head.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
  });
}
export function createChatWoot(options) {
  const ChatWoot = {
    install(app) {
      const chatwoot = defu(options, {
        init: { baseUrl: "https://app.chatwoot.com" },
        partytown: false
      });
      const chatwootSettings = defu(chatwoot.settings, {
        showPopoutButton: false,
        darkMode: "auto",
        hideMessageBubble: false,
        position: "right",
        locale: "en",
        launcherTitle: "Chat with us",
        type: "expanded_bubble"
      });
      chatwoot.settings = chatwootSettings;
      app.config.globalProperties.$chatwoot = chatwoot;
      loadScript(`${chatwoot.init.baseUrl}/packs/js/sdk.js`, {
        async: true,
        defer: true,
        partytown: chatwoot.partytown || false
      }).then(() => {
        window.chatwootSettings = chatwootSettings;
        if (window.chatwootSDK) {
          window.chatwootSDK.run({
            websiteToken: options.init.websiteToken,
            baseUrl: chatwoot.init.baseUrl
          });
        }
      });
      app.provide("$chatwoot", chatwoot);
    }
  };
  return ChatWoot;
}
export function useChatWoot() {
  const observer = ref(null);
  const start = ref(1);
  let timer;
  const isModalVisible = ref(false);
  function observerStart(data) {
    try {
      const callback = (mutationList) => {
        for (const mutation of mutationList) {
          if (mutation.type === "attributes") {
            const data2 = mutation.target.className.includes(
              "hide"
            );
            if (data2)
              isModalVisible.value = false;
            else
              isModalVisible.value = true;
          }
        }
      };
      observer.value = new MutationObserver(callback);
      observer.value.observe(data, { attributes: true });
    } catch (e) {
    }
  }
  onMounted(() => {
    timer = setInterval(() => {
      start.value += 1;
      const data = document.querySelector(".woot-widget-holder");
      if (data || start.value > 100) {
        clearInterval(timer);
        observerStart(data);
      }
    }, 100);
  });
  onBeforeUnmount(() => {
    if (observer.value)
      observer.value.disconnect();
  });
  const toggle = (state) => {
    isLoadTimer().then(() => window.$chatwoot.toggle(state));
  };
  const setUser = (key, args) => {
    isLoadTimer().then(() => window.$chatwoot.setUser(key, args));
  };
  const setCustomAttributes = (attributes) => {
    isLoadTimer().then(() => window.$chatwoot.setCustomAttributes(attributes));
  };
  const setConversationCustomAttributes = (attributes) => {
    isLoadTimer().then(() => window.$chatwoot.setConversationCustomAttributes(attributes));
  };
  const deleteCustomAttribute = (attributes) => {
    isLoadTimer().then(
      () => window.$chatwoot.deleteCustomAttribute(attributes)
    );
  };
  const setLocale = (local) => {
    isLoadTimer().then(() => window.$chatwoot.setLocale(local));
  };
  const setLabel = (label) => {
    isLoadTimer().then(() => window.$chatwoot.setLabel(label));
  };
  const removeLabel = (label) => {
    isLoadTimer().then(() => window.$chatwoot.removeLabel(label));
  };
  const reset = () => {
    isLoadTimer().then(() => window.$chatwoot.reset());
  };
  const toggleBubbleVisibility = (visibility) => {
    isLoadTimer().then(() => {
      window.$chatwoot.toggleBubbleVisibility(visibility);
    });
  };
  const popoutChatWindow = () => {
    isLoadTimer().then(() => window.$chatwoot.popoutChatWindow());
  };
  return {
    isModalVisible,
    toggle,
    setUser,
    setCustomAttributes,
    setConversationCustomAttributes,
    deleteCustomAttribute,
    setLocale,
    setLabel,
    removeLabel,
    reset,
    toggleBubbleVisibility,
    popoutChatWindow
  };
}
function isLoadTimer() {
  return new Promise((resolve, reject) => {
    let loadNumber = 0;
    const timer = setInterval(() => {
      const data = document.querySelector(".woot-widget-holder");
      const widgetElm = document.querySelector(".woot--bubble-holder");
      loadNumber += 1;
      if (data && window.chatwootSDK && widgetElm && window.$chatwoot && window) {
        clearInterval(timer);
        resolve("Chatwoot loaded");
      } else if (loadNumber === 200) {
        clearInterval(timer);
        reject(new Error("Chatwoot not loaded"));
      }
    }, 150);
  });
}