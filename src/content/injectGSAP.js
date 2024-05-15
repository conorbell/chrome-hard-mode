chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // When a webpage loaded completely
  if (changeInfo.status === 'complete') {
    // Get the 'state' data from Chrome local storage
    chrome.storage.local.get('state', (result) => {
      // Get the current state
      const currentState = result.state;

      // Continue only if the extension's 'state' is true
      if (currentState) {
        // Execute scripts in the specified tab and its all frames
        chrome.scripting.executeScript({
          target: { tabId: tabId, allFrames: true },
          // Content script runs alongside page's main JavaScript
          world: 'MAIN',
          files: [
            // Include the core injection types
            'injector-types.js',
            // Include the specific content script for the website
            'inject-to.js', // You can dynamically generate this file name if needed
          ],
        });
      }
    });
  }
});
