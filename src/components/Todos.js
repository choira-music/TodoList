import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import { eye } from 'react-icons-kit/fa/eye';
import { edit2 } from 'react-icons-kit/feather/edit2';
import { removeTodo, handleCheckbox, handleSee } from '../redux/todoapp/actions';
import { useNavigate } from 'react-router-dom';

export const Todos = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Note the parentheses for useNavigate

  // getting todos from the store
  const todos = useSelector((state) => state.operationsReducer);
  const gotodetail = (todo) => {
    navigate('/detail', { state: { todo } });
  };
  const update = (todo) => {
    navigate('/update', { state: { todo } });
  };
  

  return todos.map((todo) => (
    <div key={todo.id} className='todo-box'>
      <div className='content'>
        {editFormVisibility === false && (
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(handleCheckbox(todo.id))}
          ></input>
        )}
        <p style={todo.completed === true ? { textDecoration: 'line-through',color:'green' } : { textDecoration: 'none' }}>
          {todo.todo}
        </p>
      </div>
      <div className='actions-box'>
        {editFormVisibility === false && (
          <>
            {/* <span className='edit' onClick={() => handleEditClick(todo)}><Icon icon={edit2} /></span> */}
            <span className='edit' onClick={() => update(todo)}><Icon icon={edit2} /></span>
            <span className='trash' onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>
            <span className='eye' onClick={() => gotodetail(todo)}><Icon icon={eye} /></span>
          </>
        )}
      </div>
    </div>
  ));
};
