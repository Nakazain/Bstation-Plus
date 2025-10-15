chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.sendMessage(tab.id, { type: 'toggleWm' }, (resp) => {
    if (chrome.runtime.lastError) {
      console.log('Injecting content script...');
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      }).then(() => {
        chrome.tabs.sendMessage(tab.id, { type: 'toggleWm' });
      });
    } else {
      console.log('Toggle result:', resp);
    }
  });
});
