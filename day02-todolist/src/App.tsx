import { useState } from 'react'
// import reactLogo from '@/assets/react.svg'
// import viteLogo from '/vite.svg'
import '@/styles/App.css'

import { TodoInput } from '@/components/TodoInput'
import { TodoList } from '@/components/TodoList'
import { SearchInput } from '@/components/SearchInput'
import { TodoStats } from '@/components/TodoStats'
import type { TodoItemModel } from '@/types/todo.types'

function App() {
  const [input, setInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [todoes, setTodoes] = useState<TodoItemModel[]>([])

  const updateTodo = (todo: TodoItemModel) => {
    setTodoes((prevTodos) => prevTodos.map((t) => (t.id === todo.id ? todo : t)))
  }

  const deleteTodo = (id: string) => {
    setTodoes((prevTodos) => prevTodos.filter((t) => t.id !== id))
  }

  const addTodo = () => {
    if (!input.trim()) return
    setInput('')
    setTodoes((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: input,
        isFinished: false,
      } as TodoItemModel,
    ])
  }

  const filteredTodos = todoes.filter((todo) =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="todo-container">
        <div className="todo-header">
          <div className="todo-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11L12 14L22 4"
                stroke="#efeff5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                stroke="#efeff5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1>待办清单</h1>
        </div>
        <TodoInput todo={input} setTodo={setInput} onEnter={addTodo} />
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TodoStats todos={todoes} filteredTodos={filteredTodos} />
        <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App
