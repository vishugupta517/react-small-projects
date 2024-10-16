/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react';
// import './style.css';
// export default function GithubProfileFinder() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [username, setUsername] = useState('');

//   const getUser = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(`https://api.github.com/users/${username}`);
//       const data = await res.json();
//       if (data) setData(data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       setError(`${error.message}`);
//     }
//   };

//   function handleSearch() {
//     useEffect(() => {
//       getUser();
//     }, []);
//   }

//   return (
//     <div className='github-profile'>
//       <input
//         type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={() => handleSearch()}>Search</button>
//     </div>
//   );
// }

import { useEffect } from 'react';
import { useState } from 'react';
import User from './user';
import './style.css';

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState('vishugupta517');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    // const res = await fetch(`https://api.github.com/rate_limit`);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('');
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input
          name='search-by-username'
          type='text'
          placeholder='Search Github Username...'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
