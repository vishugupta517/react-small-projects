/* eslint-disable react/prop-types */
import { useState } from 'react';

const AddTask = ({ handleAddTask }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type='text'
        placeholder='Add Task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddTask(text), setText('');
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
