"use client"
import React, { useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const containerRef = React.createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg', // You can choose the renderer (svg, canvas, html)
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy(); // Cleanup animation when component unmounts
    };
  }, []);

  return <div ref={containerRef} />;
};

export default LottieAnimation;