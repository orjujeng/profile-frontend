import {useEffect,useState} from 'react';
export default function checkLeftBounding (elementRef) {
    const [position, setPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          setPosition(rect.left + window.scrollX);
          console.log('left:', rect.left + window.scrollX);
        }
      };
  
      // 初始计算
      updatePosition();
      
      // 设置监听事件
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
  
      // 清理函数
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }, [elementRef]);
  
    return position;
  };