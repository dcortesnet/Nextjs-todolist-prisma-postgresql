import TodoCreate from "@/components/todo-create";
import TodoList from "@/components/todo-list";
import TodoTitle from "@/components/todo-title";
import prisma from "../lib/db";

async function getTodos() {
  return await prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();
  console.log(todos);

  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <TodoTitle />
        <TodoCreate />
        <TodoList />
      </div>
    </main>
  );
}
