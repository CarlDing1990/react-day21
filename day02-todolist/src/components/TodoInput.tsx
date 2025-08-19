interface TodoInputProps {
  todo: string
  setTodo: (value: string) => void
  onEnter: () => void
}

export function TodoInput({ todo, setTodo, onEnter }: TodoInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.() // 执行父组件传进来的"添加"回调
    }
  }

  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="添加新的待办事项..."
      />
      <button className="todo-button" onClick={onEnter}>
        添加
      </button>
    </div>
  )
}
