export default function TodoCreate() {
  return (
    <div className="bg-gray-100 p-4">
      <form>
        <input type="text" className="w-full p-2" />
        <button className="w-full bg-blue-500 text-white p-2 mt-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
}
