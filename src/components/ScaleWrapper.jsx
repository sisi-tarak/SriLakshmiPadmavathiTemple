import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const ScaleWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (isMobile && containerRef.current) {
      containerRef.current.style.transform = 'scale(0.5)';
      containerRef.current.style.transformOrigin = 'top left';
      containerRef.current.style.width = '200%';
    } else if (containerRef.current) {
      containerRef.current.style.transform = 'none';
      containerRef.current.style.width = '100%';
    }
  }, [isMobile]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default ScaleWrapper;
