/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './style.css';
import { useLocalStorage } from './useLocalStorage';
// export default function DarkMode() {
//   const [theme, setTheme] = useState(
//     JSON.parse(localStorage.getItem('lastUsedTheme')) ?? true
//   );

//   function changeTheme() {
//     const newTheme = !theme;
//     localStorage.setItem('lastUsedTheme', JSON.stringify(newTheme));
//     setTheme((prevTheme) => !prevTheme);
//   }
//   console.log('Current theme:', theme);
//   const storedTheme = JSON.parse(localStorage.getItem('lastUsedTheme'));
//   console.log('Stored theme:' + storedTheme || 'Truthy');

//   return (
//     <div className={theme ? 'theme-container dark' : 'theme-container'}>
//       <h3>Hello World!</h3>
//       <button
//         onClick={() => changeTheme()}
//         className={theme ? 'dark' : 'light'}
//       >
//         Change theme
//       </button>
//     </div>
//   );
// }

// Using custom hook for local storage

export default function DarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='container'>
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
