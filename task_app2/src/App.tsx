import { useEffect, useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { Todo } from './model'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    
    const local = localStorage.getItem("todos")
    if (local) {
      return JSON.parse(local)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <TaskInput todos={todos} setTodos={setTodos}/>
      <TaskList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App
