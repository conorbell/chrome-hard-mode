function injectContentScripts() {
  // Get the 'state' data from Chrome local storage
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      // Content script runs alongside page's main JavaScript
      world: 'MAIN',
      func: () => {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.setAttribute(
          'src',
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
        );
        // Inject before closing HTML tag `</html>`
        document.documentElement.appendChild(scriptElement);
      },
    });
  });
}
export default injectContentScripts;
