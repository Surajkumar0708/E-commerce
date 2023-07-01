import React, { useState, useEffect } from 'react';

const JumpingDivs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeColor = () => {
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % 50);
    }, 1000);

   
    //   clearInterval(intervalId);

  };

  return (
    <div>
        <button onClick={()=> changeColor()}>start</button>
      <h1>Jumping Divs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index === activeIndex ? `rgba(${Math.random().toFixed(3)},0,0,0.8)` : 'black',
              width: '50px',
              height: '50px',
              margin: '5px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default JumpingDivs;
