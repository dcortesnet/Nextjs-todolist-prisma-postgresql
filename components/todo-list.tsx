import TodoItem from "./todo-item";

export default function TodoList() {
  return (
    <div className="bg-gray-100 p-4">
      <ul className="space-y-2">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}
