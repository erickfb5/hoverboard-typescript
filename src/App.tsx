import React, { useEffect, useState } from 'react';

import './App.css';

const App: React.FC = () => {
  const [squares, setSquares] = useState<HTMLElement[]>([]);
  const colors: string[] = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

  useEffect(() => {
    const container = document.getElementById('container') as HTMLElement;
    const SQUARES = 400;

    for (let i = 0; i < SQUARES; i++) {
      const square = document.createElement('div');
      square.classList.add('square');

      square.addEventListener('mouseover', () => setColor(square));

      square.addEventListener('mouseout', () => removeColor(square));

      container.appendChild(square);
      setSquares((prevSquares) => [...prevSquares, square]);
    }
  }, []);

  const setColor = (element: HTMLElement) => {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const removeColor = (element: HTMLElement) => {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
  };

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return <div className="container" id="container"></div>;
};

export default App;
