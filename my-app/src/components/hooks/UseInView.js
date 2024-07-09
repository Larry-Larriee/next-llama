"use client";

import { useState, useEffect } from "react";

// threshold (integer): takes a number between 0 and 1. A threshold of 1 means that the element needs to be 100% in view to trigger the function. A threshold of 0 means that the function will trigger as soon as any part of the element is in view.
// rootMargin (string): takes a string that is a margin around the root element. You are able to add extra area around the element for intersection observer to detect
// returns an object with a property of isInView (boolean)
const UseInView = (ref, threshold = 0, rootMargin = "0px") => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      threshold,
      rootMargin,
    };

    // IntersectionObserver automatically adds an event argument to your callback function (remember console logging intersection observers back in the day)?
    let observer = new IntersectionObserver(([event]) => {
      setIsInView(event.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect;
  }, [threshold, rootMargin, ref]);

  // react hooks are not react components. I can pass useState values upstream to the component that calls this hook
  return { isInView };
};

export default UseInView;
