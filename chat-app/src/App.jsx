import './App.css'
import { useState } from 'react';
import ChatBox from './components/ChatBox';
import dummyMessages from './constanta';

function App() {
  const [messages, setMessages] = useState(dummyMessages);

  const onAddMessage = (dataMessage) => {
    const { sender, message } = dataMessage;
    const newMessage = { id: crypto.randomUUID(), sender, message };
    setMessages(prevState => [...prevState, newMessage])
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
