document.getElementById('toggleDark').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.documentElement.classList.toggle('ext-style');
    },
  });
});

document.getElementById('removeWm').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const watermark = document.querySelector(".ip-watermark")
      watermark.classList.toggle("hidden")
      console.log("watermark ilang")
    },
  });
});
