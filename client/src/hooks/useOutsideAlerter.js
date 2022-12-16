import { useState, useEffect, useRef } from 'react';


const useOutsideAlerter = initialIsVisible => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsComponentVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('touchend', handleClickOutside, true);

    return () => {
        document.removeEventListener('click', handleClickOutside, true);
        document.removeEventListener('touchend', handleClickOutside, true);
      }
  });


  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useOutsideAlerter;