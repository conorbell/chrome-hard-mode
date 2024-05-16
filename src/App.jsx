import { useState, useEffect } from 'react';
import injectContentScripts from './content/inection-process';
import gsap from 'gsap';

// const injectGSAP = () => {
//   const scriptElement = document.createElement('script');
//   scriptElement.setAttribute('type', 'text/javascript');
//   scriptElement.setAttribute(
//     'src',
//     'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
//   );
//   // Inject before closing HTML tag `</html>`
//   document.documentElement.appendChild(scriptElement);
// };

// const injectFunc = (code) => {
//   const scriptElement = document.createElement('script');
//   scriptElement.setAttribute('type', 'text/javascript');
//   scriptElement.textContent = code;
//   // Inject before closing HTML tag `</html>`
//   document.documentElement.appendChild(scriptElement);
// };
function App() {
  const [difficulty, setDifficulty] = useState(0);
  const [injectSAP, setInjectSAP] = useState(false);
  const [tab, setTab] = useState(null);
  let buttonText;

  // const animateH = (lvl) => {
  //   console.log(injectContentScripts());

  //   const h1Array = Array.from(document.querySelectorAll('h1'));

  //   h1Array.forEach((el, index) => {
  //     // el.innerText = 'im gay';
  //     console.log('gsap', gsap);
  //     console.log('el', el);
  //     gsap.fromTo(el, { x: 200 }, { x: -300, duration: 1, repeat: -1 });
  //   });
  // };

  const handleDifficultClick = async () => {
    setDifficulty(difficulty + 1);
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    difficulty + 1;
    console.log('difficulty', difficulty);

    if (difficulty === 0) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        world: 'MAIN',
        func: () => {
          const scriptElement = document.createElement('script');
          scriptElement.setAttribute('type', 'text/javascript');

          scriptElement.textContent = `
         
          const pArray = Array.from(document.querySelectorAll('p'));
        
          pArray.forEach((el, index) => {
            gsap.fromTo(el, { y: 200 }, { y: -300, duration: 1.0, repeat: -1 });
          });
      `;

          // Inject before closing HTML tag `</html>`
          document.documentElement.appendChild(scriptElement);
        },
      });
    } else if (difficulty === 1) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        world: 'MAIN',
        func: () => {
          const scriptElement = document.createElement('script');
          scriptElement.setAttribute('type', 'text/javascript');

          scriptElement.textContent = `
          const h1Array = Array.from(document.querySelectorAll('h1'))
          h1Array.forEach((el, index) => {
            gsap.fromTo(el, { x: 200 }, { x: -300, duration: 1.0, repeat: -1 });
          });
      `;

          // Inject before closing HTML tag `</html>`
          document.documentElement.appendChild(scriptElement);
        },
      });
    } else if (difficulty === 2) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        world: 'MAIN',
        func: () => {
          const scriptElement = document.createElement('script');
          scriptElement.setAttribute('type', 'text/javascript');

          scriptElement.textContent = `
          const aArray = Array.from(document.querySelectorAll('a'))
          aArray.forEach((el, index) => {
            gsap.to(el, {rotation: 360, x: 200 , repeat: -1});
          });
      `;

          // Inject before closing HTML tag `</html>`
          document.documentElement.appendChild(scriptElement);
        },
      });
    }
  };

  const handleButtonClick = async () => {
    // injectContentScripts();

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      world: 'MAIN',
      func: async () => {
        const injectGSAP = () => {
          if (!window.GSAPInjected) {
            const scriptElement = document.createElement('script');
            scriptElement.setAttribute('type', 'text/javascript');
            scriptElement.setAttribute(
              'src',
              'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
            );
            // Inject before closing HTML tag `</html>`
            document.documentElement.appendChild(scriptElement);
            window.GSAPInjected = true;
          }
        };

        const injectSecondScript = () => {
          const scriptElement = document.createElement('script');
          scriptElement.setAttribute('type', 'text/javascript');
          scriptElement.textContent = animateH;
          // Inject before closing HTML tag `</html>`
          return document.documentElement.appendChild(scriptElement);
        };

        // Call the functions in the desired order
        const result = injectGSAP();
        console.log('result', result);
        result.then(injectSecondScript());
        // console.log('result', result);
        // injectSecondScript();
      },
    });
  };

  return (
    <>
      <button
        onClick={() => handleButtonClick()}
        name='fun'
        className='flex h-[300px] w-[3000px] justify-center items-center m-auto border rounded-4xl'
      >
        Install GSAP
      </button>
      <button
        onClick={() => handleDifficultClick()}
        name='fun'
        className='flex h-[300px] w-[3000px] justify-center items-center m-auto border rounded-4xl'
      >
        Increase Difficulty
      </button>
    </>
  );
}
export default App;
