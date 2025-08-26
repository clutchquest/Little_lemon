import React, { useRef, useState, useEffect } from "react";
import './FadeInSection.css'
const FadeInSection = ({ children, direction = 'left' }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${direction}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
