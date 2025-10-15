let enabled = false;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'toggleWm') {
    enabled = !enabled;
    document.documentElement.classList.toggle('ext-style', enabled);
    sendResponse({ status: enabled });
  }
});
