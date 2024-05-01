import TodoCreate from "@/components/todo-create";
import TodoList from "@/components/todo-list";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Todo List Nextjs
        </h1>
        <TodoCreate />
        <TodoList />
      </div>
    </main>
  );
}
