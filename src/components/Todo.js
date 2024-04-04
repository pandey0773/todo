import React, { useState } from 'react'
import {addTodo, DeletTodo} from '../actions/index'
// import {useDispatch} from 'react-redux'
import {useSelector, useDispatch } from 'react-redux'
import '../components/Todo.css'


const Todo = ()=> {
const [task , setTask] = useState('');
const list = useSelector((state)=>state.todoReducers.list)
const dispatch = useDispatch();

  return (<>
    <div className='container'>
        <h2>Task to do</h2><br></br>
        <input type='text' value={task} onChange={(e)=>{setTask(e.target.value)}} ></input>
        <button onClick={()=>{dispatch(addTodo(task),setTask(''))}}>add</button>
        
    
    {
      list.map((e)=>{
        return(
          <li key={e.id}>{e.data}
          <button onClick={()=>{dispatch(DeletTodo(e.id))}}>delet</button>
          </li>
        )
        
      })
    }</div>
  </>
  )
}
export default Todo;