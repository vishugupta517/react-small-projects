import { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

export default function ContextPractice() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([...tasks, { id: nextId++, text: text, done: false }]);
  }

  function handleDeleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }
  console.log(tasks);
  return (
    <div>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleChangeTask={handleChangeTask}
      />
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];
