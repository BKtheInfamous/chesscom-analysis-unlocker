chrome.runtime.onMessage.addListener((message) => {
  const url = message.url;
  fetch('*', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json', 
    },
  });
});