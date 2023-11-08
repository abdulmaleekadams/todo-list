import { useRef } from 'react';
import './CSS/Todo.css';
import { useEffect } from 'react';
import { useState } from 'react';
import TodoItems from './TodoItems';

const Todo = () => {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  const handleEnterKey = (e) => {
    e.key === 'Enter' && handleAddTodo();
  };

  
  const handleAddTodo = () => {
      console.log(todos);
    inputRef.current.value.trim() !== '' &&
      setTodos([
        ...todos,
        { no: todos.length, text: inputRef.current.value.trim(), display: '' },
      ]);
    inputRef.current.value = '';
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);

    useEffect(() => {
    
        setTimeout(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Add your task'
          className='todo-input'
          onKeyDown={handleEnterKey}
        />
        <button onClick={handleAddTodo} className='todo-add-button'>
          Add
        </button>
      </div>
      <div className='todo-list'>
        {todos.map((todo, idx) => (
          <TodoItems
            no={todo.no}
            key={`todo-${idx}`}
            text={todo.text}
            display={todo.display}
            setTodo={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
