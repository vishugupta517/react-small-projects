// import { useEffect, useState } from 'react';
// import './style.css';
// function SearchAutocomplete() {
//   const [users, setUsers] = useState([]);
//   const [input, setInput] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [error, setError] = useState(null);

import { useEffect, useState } from 'react';
import UsersList from './UsersList';

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     setError(null);
//     try {
//       const res = await fetch('https://dummyjson.com/users');
//       const data = await res.json();
//       //   console.log(data);
//       if (data) {
//         setUsers(data.users);
//       }
//     } catch (e) {
//       setError(e.message);
//     }
//   };

//   //   function filterSearch() {
//   //     if (input.length > 0 && users.length > 0) {
//   //       const filtered = users.filter(
//   //         (name) =>
//   //           name.firstName.toLowerCase().includes(input.toLowerCase()) ||
//   //           name.lastName.toLowerCase().includes(input.toLowerCase())
//   //       );
//   //       setFilteredUsers(filtered);
//   //     } else if (users.length > 0) setFilteredUsers(users);
//   //     return setFilteredUsers([]);
//   //   }
//   function filterSearch() {
//     // setFilteredUsers([]);
//     if (input.trim().length > 0 && users.length > 0) {
//       const filtered = users.filter(
//         (user) =>
//           user.firstName.toLowerCase().includes(input.toLowerCase()) ||
//           user.lastName.toLowerCase().includes(input.toLowerCase())
//       );
//       setFilteredUsers(filtered);
//       //   setInput('');
//     } else if (users.length > 0) {
//       setFilteredUsers(users);
//       //   setInput('');
//     } else {
//       setFilteredUsers([]);
//       //   setInput('');
//     }
//   }

//   console.log(filteredUsers);
//   //   console.log('run');
//   return (
//     <div className='search-users'>
//       <input
//         type='text'
//         onChange={(e) => {
//           setInput(e.target.value);
//           filterSearch();
//           //   setFilteredUsers([]);
//         }}
//         value={input}
//       />
//       {/* <button onClick={() => filterSearch()}>Search</button> */}
//       {filteredUsers && filteredUsers.length > 0 ? (
//         <ul>
//           {filteredUsers.map((user) => {
//             return (
//               <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
//             );
//           })}
//         </ul>
//       ) : null}
//     </div>
//   );
// }

// export default SearchAutocomplete;

function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  async function fetchListOfUsers() {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredData =
        users && users.length
          ? users.filter(
              (name) =>
                name.firstName.toLowerCase().indexOf(query) > -1 ||
                name.lastName.toLowerCase().indexOf(query) > -1
            )
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  console.log(users, filteredUsers);
  return (
    <div className='search-autocomplete-container'>
      {loading ? (
        <h1>Loading data!</h1>
      ) : (
        <input
          type='text'
          name='search-users'
          placeholder='Search Users here..'
          onChange={handleChange}
        />
      )}
      {showDropdown && <UsersList data={filteredUsers} />}
    </div>
  );
}
export default SearchAutocomplete;
