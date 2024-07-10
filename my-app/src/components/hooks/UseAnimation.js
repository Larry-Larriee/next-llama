import React, { useState } from "react";

// elementOpen (boolean) determines whether the element is open or not
// setElementOpen (useState) toggles the value of elementOpen
// setElementClosing (useState) toggles the value of elementClosing
let UseAnimation = (elementOpen, changeElementOpen, changeElementClosing) => {
  const [debounce, setDebounce] = useState(false);

  let useAnimation = () => {
    if (debounce) return;

    // when the docs button is pressed (found in editor.js), the docsOpen will be true and closing will be set to false
    // once the docs button is pressed again to close the docs, docsOpen will be set to false (for useEffect to play the
    // closing animation), and closing will be set to true remove the docs from the DOM
    if (elementOpen) {
      setDebounce(true);
      // Docs.js also reads that docsOpen is false and plays the animation
      changeElementOpen(false);

      setTimeout(() => {
        // closing being true will remove the docs from the DOM
        changeElementClosing("true");
        setDebounce(false);
      }, 750);
    } else if (!elementOpen) {
      setDebounce(true);

      // closing being false will add the docs back to the DOM
      changeElementClosing("false");
      changeElementOpen(true);

      setTimeout(() => {
        setDebounce(false);
      }, 750);
    }
  };

  // Once you call a React hook at the top level of your functional component, you can use the values and functions it returns throughout
  // your JSX code, including within the DOM rendering. In this case, the useAnimation method.
  return { useAnimation };
};

export default UseAnimation;
