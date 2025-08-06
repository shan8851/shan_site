'use client';

import { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="cursor-pointer fixed bottom-8 right-8 z-50 p-3 rounded-full bg-surface border border-border hover:bg-purple hover:border-purple hover:text-background transition-all duration-200 group shadow-lg"
      aria-label="Scroll to top"
    >
      <BiUpArrowAlt className="text-xl group-hover:scale-110 transition-transform" />
    </button>
  );
}
