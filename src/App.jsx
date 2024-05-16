import { useState } from 'react';

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
            gsap.fromTo(el, { y: "random(600, -200, 5)"  }, { y: -300, duration: 2.0, repeat: -1 });
          });

          const imgArray = Array.from(document.querySelectorAll('img'))
          h1Array.forEach((el, index) => {
            gsap.fromTo(el, { x: -200 }, { x: 3400, duration: 3.0, repeat: -1 });
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
            gsap.fromTo(el, { x: 200 }, { x: -300, duration: 3.0, repeat: -1 });
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

          const divArray = Array.from(document.querySelectorAll('div'))
          divArray.forEach((el, index) => {
            gsap.to(el, {rotation: 360 * 100, repeat: -1, duration: 10 });
          });
      `;

          // Inject before closing HTML tag `</html>`
          document.documentElement.appendChild(scriptElement);
        },
      });
    } else if (difficulty === 3) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        world: 'MAIN',
        func: () => {
          const scriptElement = document.createElement('script');
          scriptElement.setAttribute('type', 'text/javascript');

          scriptElement.textContent = `
          const body = document.querySelector('body');
          body.style.backgroundImage = 'url("https://i.kym-cdn.com/entries/icons/original/000/045/198/smilingbucktooth.jpg")';
          body.style.backgroundSize = '80px'
          body.style.backgroundRepeat = 'repeat'

         var tl = new TimelineMax({repeat: -1});
         tl.to(body, 100, {
          backgroundPosition: "-2247px 10000px",
         })
      `;

          // Inject before closing HTML tag `</html>`
          document.documentElement.appendChild(scriptElement);
        },
      });
    } else if (difficulty === 4) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        world: 'MAIN',
        func: () => {
          const scriptElement = document.createElement('script');
          scriptElement.setAttribute('type', 'text/javascript');

          scriptElement.textContent = `
          const newBody = document.querySelector('body');
          newBody.style.backgroundImage = 'url("https://img.freepik.com/premium-psd/psd-donkey-transparent-background_1020729-247.jpg?w=740")';
          newBody.style.backgroundSize = '400px'
          newBody.style.backgroundRepeat = 'repeat'

          var tl = new TimelineMax({repeat: -1, duration: 1});
          tl.to(newBody, 100, {
           backgroundPosition: "0px 0px",
           backgroundSize: "+=100% +=100%"
          })
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
