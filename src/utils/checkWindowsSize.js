import { useState, useEffect } from 'react';
 export default function checkWindowSize (){
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return size;
  };
  