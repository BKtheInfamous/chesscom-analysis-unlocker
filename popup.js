/*// Wrap your code inside the DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("extensionButton").addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.runtime.sendMessage({ type: "executeContentScript" });
        });
    });
});
*/