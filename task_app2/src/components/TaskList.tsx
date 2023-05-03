import React from 'react'
import '../styles.css'
import { Todo } from '../model'
import Task from './Task'

interface props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList = ({todos, setTodos}:props) => {

    function completeTask(id:string, check:boolean) {
        setTodos((todos) => {
            return todos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, checked: check}
                }
                return todo
            })
        })
    }

    function deleteTodo(id:string) {
        setTodos((todos) => {
            return todos.filter((todo) => 
                todo.id !== id
            )
        })
    }

  return (
    <>
        <div className='header'>List:</div>
        <ul className='list'>
            {todos.length === 0 && "No todos"}
            { todos.map((todo) => {
                return (
                    <Task {...todo} 
                        key={todo.id} 
                        completeTask={completeTask} 
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    </>
  )
}

export default TaskList