import { useState } from 'react';

// function ColorGenerator() {
//   const [randomColor, setRandomColor] = useState('');
//   const [hexColor, setHexColor] = useState(false);
//   const [rgbColor, setRgbColor] = useState(false);

//   function generateColor() {
//     const randomHex = Array.from({ length: 6 }, () =>
//       Math.floor(Math.random() * 10)
//     ).join('');
//     const randomRGB = Array.from({ length: 3 }, () =>
//       Math.floor(Math.random() * 256)
//     ).join(',');
//     setRandomColor(hexColor ? `#${randomHex}` : `rgb(${randomRGB})`);
//   }

//   return (
//     <>
//       <div style={{ backgroundColor: `${randomColor}` }}>
//         <button
//           onClick={() => {
//             setHexColor(true);
//             setRgbColor(false);
//           }}
//         >
//           {hexColor ? 'Hex Color Selected' : 'Create Hex Color'}
//         </button>
//         <button
//           onClick={() => {
//             setRgbColor(true);
//             setHexColor(false);
//           }}
//         >
//           {rgbColor ? 'RGB Color Selected' : ' Create RGB Color'}
//         </button>
//         <button onClick={() => generateColor()}>Generate Random Color</button>
//         {hexColor ? (
//           <div>
//             <h1>Hex Color</h1>
//             <h2>{randomColor}</h2>
//           </div>
//         ) : rgbColor ? (
//           <div>
//             <h1>RGB Color</h1>
//             <h2>{randomColor}</h2>
//           </div>
//         ) : (
//           <div>
//             <h1>Generate Color</h1>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

function ColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor('hex');
          handleCreateRandomHexColor();
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor('rgb');
          handleCreateRandomRgbColor();
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default ColorGenerator;
