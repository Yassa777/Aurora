import React, { useRef, useEffect } from 'react';

const GradientGenerator = ({ colors }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors.dominant);
    gradient.addColorStop(0.33, colors.auxiliary);
    gradient.addColorStop(0.66, colors.tertiary);
    gradient.addColorStop(1, colors.inferior);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 30;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    
    ctx.putImageData(imageData, 0, 0);
  }, [colors]);

  return (
    <canvas 
      ref={canvasRef} 
      width={256}
      height={384}
      className="w-64 h-96 rounded-lg shadow-lg"
    />
  );
};

export default GradientGenerator;