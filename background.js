chrome.runtime.onMessage.addListener((message) => {
  const url = message.url;
  fetch('http://0.0.0.0:5002/', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json', 
    },
  });
});