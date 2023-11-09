import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { addTodo } from '../redux/todoapp/actions';

function AddTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const [todoValue, setTodoValue] = useState('');
  const [todoDetail, setTodoDetail] = useState('');
  const [todoDuration, setTodoDuration] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const location = useLocation();
  const todo = location.state.todo;
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      detail: todoDetail,
      duration: todoDuration,
      date: todoDate,
      completed: false
    };
    setTodoValue('');
    setTodoDetail('');
    setTodoDuration('');
    setTodoDate('');
    dispatch(addTodo(todoObj));

    
    navigate('/'); 
  }

  return (
    <>
    <div className='todo-main'>

      <form className="" onSubmit={handleFormSubmit}>
        <div className='input-main'>
          <div className="all-input">
        <h1 className="text-center">Write all details</h1>
            <input type="text" className="form-control" required placeholder="write title" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} /><br></br>
            <input type="text" className="form-control" required placeholder="write in details" value={todoDetail} onChange={(e) => setTodoDetail(e.target.value)} /><br></br>
            <input type="time" className="form-control" required placeholder="write duration" value={todoDuration} onChange={(e) => setTodoDuration(e.target.value)} /><br></br>
            <input type="date" className="form-control" required value={todoDate} onChange={(e) => setTodoDate(e.target.value)} /><br></br>
            <button type="submit" className="btn btn-secondary btn-md">ADD</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default AddTodo;
