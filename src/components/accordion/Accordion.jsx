import { useState } from 'react';

import data from './data';

function Accordion() {
  const [enablemultiSelection, setEnablemultiSelection] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mutipleItems, setMultipleItems] = useState([]);

  const toggleSingleSelection = (id) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === id ? null : id
    );
  };

  const toggleMutipleSelection = (item) => {
    setMultipleItems((prevItems) =>
      prevItems.includes(item.id)
        ? prevItems.filter((prevItem) => prevItem !== item.id)
        : [...prevItems, item.id]
    );
  };
  console.log(mutipleItems);
  return (
    <>
      <button onClick={() => setEnablemultiSelection(!enablemultiSelection)}>
        {enablemultiSelection
          ? 'enablemultiSelection on'
          : 'enablemultiSelection off'}
      </button>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            <h6>{item.question}</h6>
            <span
              onClick={() =>
                enablemultiSelection
                  ? toggleMutipleSelection(item)
                  : toggleSingleSelection(item.id)
              }
            >
              +
            </span>
          </div>
          {enablemultiSelection ? (
            mutipleItems.includes(item.id) && <div>{item.answer}</div>
          ) : selectedItem === item.id ? (
            <div>{item.answer}</div>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default Accordion;
