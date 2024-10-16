import { useState } from 'react';

/* eslint-disable react/prop-types */
const TaskList = ({ tasks, handleDeleteTask, handleChangeTask }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleChangeTask={handleChangeTask}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

const Task = ({ task, handleDeleteTask, handleChangeTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <input
        type='checkbox'
        checked={task.done}
        onChange={(e) => handleChangeTask({ ...task, done: e.target.checked })}
      />
      {isEditing ? (
        <>
          <input
            type='text'
            onChange={(e) =>
              handleChangeTask({ ...task, text: e.target.value })
            }
          />
        </>
      ) : (
        task.text
      )}
      {isEditing ? (
        <button onClick={() => setIsEditing(!isEditing)}>save</button>
      ) : (
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      )}
      <button onClick={() => handleDeleteTask(task)}>Delete</button>
    </>
  );
};

export default TaskList;
