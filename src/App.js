import React from 'react';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import Todo from './components/Todo';

function App(props) {
  // const taskList = props.tasks?.map(task => (
  //   <Todo id={task.id} name={task.name} completed={task.completed} />
  // ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{props.tasks.length} tasks remaining</h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {props.tasks.map(task => (
          <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} />
        ))}
      </ul>
    </div>
  );
}

export default App;
