import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Todo from './components/Todo';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = name => {
    if (!name || parseInt(name)) {
      alert('Dados incorretos');
      return 0;
    }
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = id => {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  };

  const toggleTaskCompleted = id => {
    const updatedTasks = tasks.map(task => {
      // se o task tem a msm id edita
      if (id === task.id) {
        // use object spread para criar um novo objeto

        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const taskList = tasks.map(task => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const listHeadingText = `${taskList.length} ${
    taskList.length !== 1 ? 'tasks' : 'task'
  } remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onAddTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{listHeadingText}</h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
