/* chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, "buttonClicked");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "executeContentScript") {
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            function: handleButtonClick,
        });
    }
}); */




/* chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });

  chrome.tabs.onClicked.addListener(async(tab) => {
    if (tab.url && tab.url.includes("chess.com/member/")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
    }
  }); */
  
  