/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';

export default function StarRating({ noOfStars = 5 }) {
  const [selectedStarCount, setSelectedStarCount] = useState(0);
  const [selectHoverCount, setSelectHoverCount] = useState(0);
  return (
    <>
      <div className='stars'>
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <span
              key={index}
              //   className={`${index + 1 <= selectedStarCount ? 'selected' : ''} ${
              //     index + 1 <= selectHoverCount ? 'selected' : ''
              //   }`}
              className={
                index + 1 <= selectedStarCount || index + 1 <= selectHoverCount
                  ? 'selected'
                  : ''
              }
              onMouseOver={() => {
                setSelectHoverCount(index + 1);
              }}
              onMouseOut={() => {
                setSelectHoverCount(0);
              }}
              onClick={() => setSelectedStarCount(index + 1)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <p>Rating Count: {selectedStarCount}</p>
      <hr />
      <p>Hover Couhnt: {selectHoverCount}</p>
    </>
  );
}
