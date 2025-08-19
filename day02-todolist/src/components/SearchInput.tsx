interface SearchInputProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

export function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="搜索待办事项..."
      />
      {searchTerm && (
        <button 
          className="todo-button" 
          onClick={() => setSearchTerm('')}
          style={{ backgroundColor: '#6c757d' }}
        >
          清除
        </button>
      )}
    </div>
  )
}