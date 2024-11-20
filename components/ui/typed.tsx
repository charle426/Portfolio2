import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
type Props = { classname: string }

const TypingAnimation: React.FC<Props> = (props) => {
  const el = useRef(null); // Reference to the HTML element for typing

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a developer.", "Welcome to my portfolio!"],
      typeSpeed: 50,    // Typing speed in milliseconds
      backSpeed: 30,    // Erase speed in milliseconds
      loop: true,       // Loop the typing animation
    });

    // Destroy instance on unmount to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} className={props.classname}></span>;
};

export default TypingAnimation;