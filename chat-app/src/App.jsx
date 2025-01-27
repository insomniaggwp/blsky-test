import './App.css'
import { useRef, useEffect, useState } from 'react';
import ChatBox from './components/ChatBox';

function App() {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8080');

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'history') {
        setMessages(data.messages);
      } else {
        setMessages((prev) => [...prev, data]);
      }
    };

    return () => socketRef.current.close();
  }, []);

  const onAddMessage = (message) => {
    const { sender, content } = message;
    const newMessage = { id: crypto.randomUUID(), sender, content };
    socketRef.current.send(JSON.stringify(newMessage));
  }

  return (
    <div className="app">
      <header>
        <h1>Chat App</h1>
        <div className="chat-room-wrapper">
          <ChatBox sender="left" messages={messages} onAddMessage={onAddMessage}/>
          <ChatBox sender="right" messages={messages} onAddMessage={onAddMessage}/>
        </div>
      </header>
    </div>
  )
}

export default App
