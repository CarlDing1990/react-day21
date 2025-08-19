import { useState } from 'react'
import type { TodoItemModel } from '@/types/todo.types'

export function TodoItem({
  todo,
  setIsFinished,
  deleteTodo,
  updateTodo,
}: {
  todo: TodoItemModel
  setIsFinished: (value: boolean) => void
  deleteTodo: (id: string) => void
  updateTodo: (todo: TodoItemModel) => void
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.name)

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo({ ...todo, name: editText.trim() })
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditText(todo.name)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  if (isEditing) {
    return (
      <li className="todo-item">
        <input
          className="todo-input"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <button className="todo-button" onClick={handleSave}>保存</button>
        <button 
          className="todo-button" 
          onClick={handleCancel}
          style={{ backgroundColor: '#6c757d' }}
        >
          取消
        </button>
      </li>
    )
  }

  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.isFinished}
        onChange={() => setIsFinished(!todo.isFinished)}
      />
      <span 
        className={`todo-text ${todo.isFinished ? 'completed' : ''}`}
        onDoubleClick={() => setIsEditing(true)}
        style={{ cursor: 'pointer' }}
      >
        {todo.name}
      </span>
      
      <div className="todo-actions">
        <button 
          className="todo-button todo-button-small"
          onClick={() => setIsEditing(true)}
          style={{ backgroundColor: '#ffc107' }}
        >
          编辑
        </button>
        <button 
          className="todo-button todo-button-small"
          onClick={() => deleteTodo(todo.id)}
          style={{ backgroundColor: '#dc3545' }}
        >
          删除
        </button>
      </div>
    </li>
  )
}
