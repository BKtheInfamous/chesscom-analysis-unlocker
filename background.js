chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTabUrl") {
      const tabUrl = sender.tab.url;
      sendResponse({ url: tabUrl });
  }
});
