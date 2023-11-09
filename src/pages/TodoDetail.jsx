import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TodoDetail = () => {
  const location = useLocation();
  const todo = location.state.todo;
  const navigate = useNavigate();
  const goback = ()=>{
    navigate('/')
  }
  

  return (

 <>
 <div className='detail-main'>
 <div className='detail-wrap'>
      <h2>Todo Details </h2>

      <p>ID: <span> {todo.id}</span> </p>
      <p>Title:  <span> {todo.todo}</span>  </p>
      <p>Details: <span> {todo.detail}</span>  </p> 
      <p>Duration: <span> {todo.duration} </span> </p>
      <p>Date: <span> {todo.date} </span> </p>
      <p>Task Completed:   {todo.completed ? <i style={{color:'green'}}>'Yes'</i> : <i style={{color:'red'}}>'No'</i>}  </p>
      <button className='back-btn2' onClick={goback}>Back</button>
    </div>
 </div>
 </>
  );
};

export default TodoDetail;
