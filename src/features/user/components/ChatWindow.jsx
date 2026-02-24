const ChatWindow = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6 h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <p className="text-gray-600">Chat messages...</p>
      </div>

      <div className="mt-4 flex">
        <input className="flex-1 border p-2 rounded-l" />
        <button className="bg-indigo-600 text-white px-4 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;