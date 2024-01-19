import React from 'react'
import { UseSelector , useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoslice'


const todo = () => {
    const todos = useSelector(state => state.todos )
    const dispatch = useDispatch()
  return (
   <>
   <div>Todos</div>
   {todos.map((todo) => (
    <li key={todo.id}>
        {todo.text}
        <button
        onClick={()=> dispatch(removeTodo(todo.id))}
        > ❌ 
        </button>
    </li>
   ))}
   </>
  )
}

export default todo