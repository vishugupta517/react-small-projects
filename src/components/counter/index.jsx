/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      incrementCounter();
    }, 1000);
  }, [counter]);

  function incrementCounter() {
    if (counter < 10) {
      setCounter((prevCount) => prevCount + 1);
    } else setCounter(0);
  }

  return <div>{counter}</div>;

  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((prevCount) => prevCount + 1); // <-- Change this line!
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []); // Pass in empty array to run effect only once!

  // return <div>Count: {counter}</div>;
}
