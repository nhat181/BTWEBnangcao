import React, { useRef, useEffect } from 'react';

const SolarSystem = () => {
  const canvasRef = useRef(null);
  const planets = [
    { name: 'Mercury', radius: 5, distance: 50, speed: 0.02, color: 'gray' },
    { name: 'Venus', radius: 10, distance: 70, speed: 0.014, color: 'yellow' },
    { name: 'Earth', radius: 10, distance: 100, speed: 0.01, color: 'blue' },
    { name: 'Mars', radius: 8, distance: 130, speed: 0.006, color: 'red' },
    { name: 'Jupiter', radius: 20, distance: 160, speed: 0.004, color: 'orange' },
    { name: 'Saturn', radius: 18, distance: 200, speed: 0.003, color: 'goldenrod' },
    { name: 'Uranus', radius: 15, distance: 240, speed: 0.002, color: 'lightblue' },
    { name: 'Neptune', radius: 15, distance: 280, speed: 0.0016, color: 'blue' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    // Draw starry background
    const drawStars = () => {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const starSize = Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, starSize, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Draw stars
      drawStars();

      // Draw the Sun
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.closePath();

      // Draw the planets
      planets.forEach((planet) => {
        angle += planet.speed; // Update angle
        const x = canvas.width / 2 + planet.distance * Math.cos(angle);
        const y = canvas.height / 2 + planet.distance * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = requestAnimationFrame(draw); // Request the next frame
    };

    draw(); // Start the drawing

    return () => {
      cancelAnimationFrame(animationFrameId); // Clean up on component unmount
    };
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default SolarSystem;
