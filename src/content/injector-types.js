export const injector = {
  injectGSAP: () => {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
    );
    // Inject before closing HTML tag `</html>`
    document.documentElement.appendChild(scriptElement);
  },

  injectGSAPFunc: (code) => {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.textContent = code;
    // Inject before closing HTML tag `</html>`
    document.documentElement.appendChild(scriptElement);
  },
};
