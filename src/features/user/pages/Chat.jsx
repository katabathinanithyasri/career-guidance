import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { text: "Hello! I'm your Career Guide Assistant. How can I help you today?", sender: "bot" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, isTyping]);

  const getBotReply = (msg) => {
    const message = msg.toLowerCase();
    if (message.includes("career") || message.includes("job")) {
      return "I can help you explore career paths, find mentors, or book a counseling session.";
    }
    if (message.includes("resume")) {
      return "I can suggest resume templates and interview tips to improve your profile.";
    }
    if (message.includes("skills") || message.includes("assessment")) {
      return "Try the Skill Assessment page to understand your strengths and growth areas.";
    }
    if (message.includes("book") || message.includes("session")) {
      return "You can book a career counseling session on the Book Session page.";
    }
    if (message.includes("hi") || message.includes("hello")) {
      return "Hi there! 👋 How can I assist you in your career journey today?";
    }
    return "Thanks for your message! I’ll guide you shortly 🚀";
  };

  const handleSend = () => {
    if (!message.trim()) {
      toast.error("Message cannot be empty!");
      return;
    }

    const userMsg = { text: message, sender: "user" };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");

    setIsTyping(true);
    setTimeout(() => {
      const botMsg = { text: getBotReply(message), sender: "bot" };
      setChat((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">

      {/* Chat messages */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg max-w-xs w-fit break-words ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-200 dark:bg-gray-700 text-white-900"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg w-fit text-gray-900 animate-pulse">
            CareerBot is typing...
          </div>
        )}
        <div ref={scrollRef}></div>
      </div>

      {/* Input area */}
      <div className="p-4 border-t flex gap-2 bg-white dark:bg-gray-800">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;