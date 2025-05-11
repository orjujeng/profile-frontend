import {useEffect,useState} from 'react';
export default function checkLeftBounding (elementRef) {
    const [position, setPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          setPosition(rect.left + window.scrollX);
        }
      };
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }, [elementRef]);
  
    return position;
  };