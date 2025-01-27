import './App.css'
import { useState } from 'react';
import { Minimize2, Maximize2, Send } from "react-feather";
import dummyMessages from './constanta';

function App() {
  const [messages, setMessages] = useState(dummyMessages);
  const [message, setMessage] = useState();
  const [isChatBoxDisplay, setIsChatBoxDisplay] = useState(true);

  const onSubmitMessage = (e) => {
    e.preventDefault();

    if (message.trim()) {
      const newMessage = { id: crypto.randomUUID(), sender: 'left', message };
      setMessages((prevMessage) => [...prevMessage, newMessage]);
      setMessage('');
    }
  }

  const RenderToggleHeader = () => {
    return (
      <button className="button-close" onClick={() => setIsChatBoxDisplay((prevState) => { return !prevState })}>
        {isChatBoxDisplay ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
      </button>
    );
  };

  return (
    <div className="app">
      <header>
        <h1>Chat App</h1>
        <div className="chat-room-wrapper">
        <div
          className="chat-wrapper"
        >
          <div className="chat-header">
            <h3>Left</h3>
            <div className="chat-icon-wrapper">
              <RenderToggleHeader />
            </div>
          </div>
          <div className={`chat-content-wrapper`}>
            <div className="chat-container">
              {messages.length > 0 &&
                messages.map((message) => {
                  return (
                    <div
                      key={message.id}
                      className="chat-bubble"
                    >
                      {message.message}
                    </div>
                  );
                })}
            </div>
            <div className="chat-content-footer">
              <form className="input-message-wrapper" onSubmit={onSubmitMessage}>
                <div className="input-wrapper">
                  <input value={message} onChange={(e) => setMessage(e.target.value)}></input>
                </div>
                <div className="button-wrapper">
                  <button type="submit">
                    <Send size={24} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </header>
    </div>
  )
}

export default App
