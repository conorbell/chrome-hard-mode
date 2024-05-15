const injector = {
  injectGSAP: (src) => {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', src);
    // Inject before closing HTML tag `</html>`
    document.documentElement.appendChild(scriptElement);
  },
};
