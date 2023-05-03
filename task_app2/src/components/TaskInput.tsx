import React, { useState } from 'react'
import '../styles.css'
import { Todo } from '../model'

interface props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskInput = ({todos, setTodos}:props) => {
  const [todo, setTodo] = useState<string>("")

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (todo === "") {
      return
    }

    setTodos(() => {
      return ([
        ...todos,
        { id: crypto.randomUUID(), text: todo, checked: false }
      ])
    })
    
    setTodo("")
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className='new-item-form'>
        <h1 className='header'>Enter task:</h1>
        <div className='form-row'>
            <input 
                type='text' 
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />
            <button type='submit' className='btn'>Submit</button>
        </div>
    </form>
  )
}

export default TaskInput