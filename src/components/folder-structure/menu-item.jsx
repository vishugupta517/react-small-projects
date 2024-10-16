/* eslint-disable react/prop-types */

import { useState } from 'react';
import MenuList from './menu-list';

/* eslint-disable no-unused-vars */
export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  //   console.log(item);

  function handleToggleChildren(getCurrentLabel) {
    // console.log(getCurrentLabel);
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    });
  }
  //   console.log(displayCurrentChildren);
  return (
    <li>
      <div className='menu-item'>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? '-' : '+'}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
