import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';

import { useNavigate } from 'react-router-dom';
import {ic_create} from 'react-icons-kit/md/ic_create';
import Icon from 'react-icons-kit';

export const Form = ({editFormVisibility, editTodo,editDetails,editDurations,editDates, cancelUpdate}) => {

  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoValue, setTodoValue]=useState();

  // state for if someone changes the (to edit) value in update form
  const [editValue, setEditValue]=useState('');
  const [editDetail, setEditDetail]=useState('');
  const [editDuration, setEditDuration]=useState('');
  const [editDate, setEditDate]=useState('');

  // editDetail=editDetails;
  // editDuration=editDurations;
  // editDate=editDates;

  // useEffect is to show the (to edit) value in update form
  // useEffect(()=>{
  //   setEditDetail(editTodo.detail);
  // },[editDetails]);
  // useEffect(()=>{
  //   setEditDuration(editTodo.duration);
  // },[editDurations]);
  // useEffect(()=>{
  //   setEditDate(editTodo.date);
  // },[editDates]);
  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo]);

  // useEffect(()=>{
  //   setEditDetail(editTodo.detail);
  // },[editDetails]);

  // useEffect(()=>{
  //   setEditDuration(editTodo.duration);
  // },[editDurations]);

  // useEffect(()=>{
  //   setEditDate(editTodo.date);
  // },[editDates]);



  // normal add todo submit
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      setTodoValue('');
      dispatch(addTodo(todoObj))
  }

  // update form submit
  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      detail: editDetail,
      duration: editDuration,
      date: editDate,
      completed: false
    }
    dispatch(handleEditSubmit(editedObj))
  }
  const [data , setData] = useState("")
  console.log(data)
  const navigate = useNavigate();
 
  const gotoAdd =() =>{
   navigate("/addtodo" ,{state : {id : data }})
  }
  return (
    <>
      {editFormVisibility===false?(
        <form className='form-group custom-form' onSubmit={handleSubmit}>
          <label onClick={gotoAdd} >Add your todo-items</label>
          <div className='addtodo-div'>
              
              <button type="submit"  onClick={gotoAdd}  className='addtodo-btn'>ADD TO Do <Icon className='pen'  icon={ic_create} /></button>
              
          </div>
          
       
         
        </form>

      ):(
        <form className='form-group custom-form' onSubmit={editSubmit}>
          <label>Update your todo-items</label>
     

         
          <div className='input-and-btn'>
              <input type="text" className='form-control' required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)}/>
              <input type="text" className='form-control' required
              value={editDetail||""} onChange={(e)=>setEditDetail(e.target.value)}/>
              <input type="time" className='form-control' required
              value={editDuration||""} onChange={(e)=>setEditDuration(e.target.value)}/>
              <input type="date" className='form-control' required
              value={editDate||""} onChange={(e)=>setEditDate(e.target.value)}/>
              <button type="submit" className='btn btn-secondary btn-md'>UPDATE</button>
          </div>
          <button type="button" className='back-btn'
          onClick={cancelUpdate}>BACK</button>
        </form>
      )}
      
    </>
  )
}
