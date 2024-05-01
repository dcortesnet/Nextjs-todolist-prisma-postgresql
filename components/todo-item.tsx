export default function TodoItem() {
  return (
    <li className="flex items-center">
      <input type="checkbox" className="mr-2" />
      <span>Task name</span>
      <button className="ml-auto bg-red-500 text-white px-2">Delete</button>
    </li>
  );
}
