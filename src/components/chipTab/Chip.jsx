// import { useState } from 'react';

// /* eslint-disable react/prop-types */

// const data = [
//   'Naruto',
//   'Sasuke',
//   'Sakura',
//   'Jiraya',
//   'Obito',
//   'Nagato',
//   'Pain',
//   'Kakashi'
// ];

// function Chip() {
//   const [names, setNames] = useState(data);
//   const [selectNames, setSelectNames] = useState([]);
//   const [showNames, SetShowNames] = useState(false);
//   // const [input, setInput] = useState('');

//   function handleList() {
//     SetShowNames(!showNames);
//   }

//   function handleNames(name) {
//     setSelectNames((prevSelectedNames) => [...prevSelectedNames, name]);
//     setNames((prevNames) => prevNames.filter((item) => item !== name));
//   }

//   function handleDelete(name) {
//     setSelectNames((prevSelectedNames) =>
//       prevSelectedNames.filter((item) => item !== name)
//     );
//     setNames((prevNames) => [...prevNames, name]);
//   }

//   function handleSearch(input) {
//     // const filteredNames = names.filter((name) => {
//     //   if (input === '') return names;
//     //   else name.toLowerCase().includes(input.toLowerCase());
//     // });
//     // setNames(filteredNames);
//     const filteredNames = data.filter((name) =>
//       name.toLowerCase().includes(input.toLowerCase())
//     );
//     setNames(filteredNames);
//   }

//   // function handleSearch(input) {
//   //   if (input.trim() === '') {
//   //     setNames([
//   //       'Naruto',
//   //       'Sasuke',
//   //       'Sakura',
//   //       'Jiraya',
//   //       'Obito',
//   //       'Nagato',
//   //       'Pain',
//   //       'Kakashi'
//   //     ]);
//   //   } else {
//   //     setNames((prevNames) =>
//   //       prevNames.filter((text) =>
//   //         text.toLowerCase().includes(input.toLowerCase())
//   //       )
//   //     );
//   //   }
//   // }

//   return (
//     <>
//       <div className='card'>
//         <div className='inputTab'>
//           {selectNames.map((name) => (
//             <span className='nameChips' key={name}>
//               <span>{name}</span>
//               <span onClick={() => handleDelete(name)}>X</span>
//             </span>
//           ))}
//           <input
//             type='text'
//             onClick={() => handleList()}
//             onChange={(e) => handleSearch(e.target.value)}
//           />
//           <div className='inputLine'></div>
//         </div>
//         {showNames && (
//           <div className='namesList'>
//             {names.map((name) => (
//               <div key={name}>
//                 <ul>
//                   <li onClick={() => handleNames(name)}>{name}</li>
//                 </ul>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Chip;

import { useState } from 'react';
import './chip.css';
const data = [
  'Naruto',
  'Sasuke',
  'Sakura',
  'Jiraya',
  'Obito',
  'Nagato',
  'Pain',
  'Kakashi'
];

function Chip() {
  const [allNames, setAllNames] = useState(data);
  const [selectNames, setSelectNames] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);

  function handleList() {
    setShowNames(true);
  }

  function handleNames(name) {
    setSelectNames((prevSelectedNames) => [...prevSelectedNames, name]);
    setAllNames((prevNames) => prevNames.filter((item) => item !== name));
    setFilteredNames((prevFilteredNames) =>
      prevFilteredNames.filter((item) => item !== name)
    );
  }

  function handleDelete(name) {
    setSelectNames((prevSelectedNames) =>
      prevSelectedNames.filter((item) => item !== name)
    );
    setAllNames((prevNames) => [...prevNames, name]);
    setFilteredNames((prevFilteredNames) => [...prevFilteredNames, name]);
  }

  function handleSearch(input) {
    setSearchInput(input);

    if (input.trim() === '') {
      setFilteredNames(allNames);
    } else {
      const filtered = allNames.filter((text) =>
        text.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredNames(filtered);
    }
  }

  return (
    <>
      <div className='card'>
        <div className='inputTab'>
          {selectNames.map((name) => (
            <span className='nameChips' key={name}>
              <span>{name}</span>
              <span onClick={() => handleDelete(name)}>X</span>
            </span>
          ))}
          <input
            type='text'
            onFocus={() => {
              handleList();
              handleSearch(searchInput); // Ensure the list is populated
            }}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className='inputLine'></div>
        </div>
        {showNames && (
          <div className='namesList'>
            <ul>
              {filteredNames.map((name) => (
                <li key={name} onClick={() => handleNames(name)}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Chip;
