import React, { useState } from 'react';

function Form(props) {
  const [nameTask, setNameTask] = useState('');
  const handleChange = event => {
    setNameTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // envia os dados para o parent
    props.onAddTask(nameTask);
    // boa pratica: limpar os campos apos o envio
    setNameTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={nameTask}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
export default Form;
