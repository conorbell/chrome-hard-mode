import { useState } from 'react';
import { gsap } from 'gsap/dist/gsap';

function App() {
  const [difficulty, setDifficulty] = useState(0);
  const [tab, setTab] = useState(null);
  let buttonText;

  const animateH = () => {
    const h1Array = Array.from(document.querySelectorAll('h1'));

    h1Array.forEach((el, index) => {
      // el.innerText = 'im gay';
      console.log('gsap', gsap);
      console.log('el', el);
      gsap.fromTo(el, { x: 200 }, { x: -300, duration: 1, repeat: -1 });
    });
  };

  const handleButtonClick = async () => {
    setDifficulty(difficulty + 1);

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: animateH,
    });
  };

  return (
    <>
      <button
        onClick={() => handleButtonClick()}
        name='fun'
        className='flex h-[300px] w-[3000px] justify-center items-center m-auto border rounded-4xl'
      >
        Increase Difficulty
      </button>
    </>
  );
}
export default App;
