import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { UPDATE_TODO, handleEditSubmit } from '../redux/todoapp/actions';



function Update() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const todo = location.state.todo;

  const [todoValue, setTodoValue] = useState(todo.todo);
  const [todoDetail, setTodoDetail] = useState(todo.detail);
  const [todoDuration, setTodoDuration] = useState(todo.duration);
  const [todoDate, setTodoDate] = useState(todo.date);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create an updatedTodo object with the modified data
    const updatedTodo = {
      id: todo.id,
      todo: todoValue,
      detail: todoDetail,
      duration: todoDuration,
      date: todoDate,
      completed: todo.completed,
    };

    // Dispatch the updateTodo action with the updatedTodo
    dispatch({ type: UPDATE_TODO, payload: updatedTodo });


    // Navigate back to the list of todos
    navigate('/');
  };

  return (
    <div className='todo-main'>
      <form onSubmit={handleFormSubmit}>
        <div className='input-main'>
          <div className='all-input'>
            <h1 className='text-center'>Update all details</h1>
            <input
              type='text'
              className='form-control'
              required
              placeholder='Write title'
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <br></br>
            <input
              type='text'
              className='form-control'
              required
              placeholder='Write in details'
              value={todoDetail}
              onChange={(e) => setTodoDetail(e.target.value)}
            />
            <br></br>
            <input
              type='time'
              className='form-control'
              required
              placeholder='Write duration'
              value={todoDuration}
              onChange={(e) => setTodoDuration(e.target.value)}
            />
            <br></br>
            <input
              type='date'
              className='form-control'
              required
              value={todoDate}
              onChange={(e) => setTodoDate(e.target.value)}
            />
            <br></br>
            <button type='submit' className='btn btn-secondary btn-md'>
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Update;
