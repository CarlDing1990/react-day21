import type { TodoItemModel } from '@/types/todo.types'

interface TodoStatsProps {
  todos: TodoItemModel[]
  filteredTodos: TodoItemModel[]
}

export function TodoStats({ todos, filteredTodos }: TodoStatsProps) {
  const total = todos.length
  const completed = todos.filter((todo) => todo.isFinished).length
  const pending = total - completed
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0
  const isFiltered = filteredTodos.length !== todos.length

  return (
    <div className="todo-stats">
      <div className="stat-item">
        <span className="stat-label">总数:</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">已完成:</span>
        <span className="stat-value completed">{completed}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">待完成:</span>
        <span className="stat-value pending">{pending}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">完成率:</span>
        <span className="stat-value">{completionRate}%</span>
      </div>
      {isFiltered && (
        <div className="stat-item">
          <span className="stat-label">过滤后:</span>
          <span className="stat-value">{filteredTodos.length}</span>
        </div>
      )}
    </div>
  )
}
