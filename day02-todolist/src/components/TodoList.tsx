import type { TodoItemModel } from '@/types/todo.types'
import { TodoItem } from '@/components/TodoItem'

export function TodoList({
  todos,
  updateTodo,
  deleteTodo,
}: {
  todos: TodoItemModel[]
  updateTodo: (todo: TodoItemModel) => void
  deleteTodo: (id: string) => void
}) {
  function setIsFinished(todo: TodoItemModel, isFinished: boolean) {
    updateTodo({ ...todo, isFinished })
  }

  if (todos.length === 0) {
    return <p className="empty-state">暂无待办事项</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setIsFinished={(isFinished) => setIsFinished(todo, isFinished)}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  )
}
