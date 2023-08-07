chrome.runtime.onMessage.addListener((message) => {
  const url = message.url;
  fetch('http://127.0.0.1:5002/', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json', 
    },
  });
});