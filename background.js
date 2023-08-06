
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getTabUrl") {
      const tabUrl = sender.tab.url;
      sendResponse({ url: tabUrl });
  }
});



/*let pythonPort = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendDataToPython" && pythonPort) {
        pythonPort.postMessage({ idToReturn: message.idToReturn, urlToReturn: message.urlToReturn });
    }
});

// Establish a connection with the Python script
chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "pythonPort") {
        pythonPort = port;
        pythonPort.onMessage.addListener((message) => {
            console.log("Message from Python script:", message);
        });
    }
});*/
