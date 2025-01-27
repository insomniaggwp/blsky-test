import "./ChatBox.css";
import { useRef, useState, useEffect } from "react";
import { Minimize2, Maximize2, Send } from "react-feather";
import PropTypes from "prop-types";

const ChatBox = ({ sender, messages, onAddMessage }) => {
  const [isChatDisplay, setIsChatDisplay] = useState(true);
  const [message, setMessage] = useState("");

  const messageEndRef = useRef(null);
  const bodyChatRef = useRef(null);

  const onToggleChatDisplay = () => {
    setIsChatDisplay((prevState) => {
      return !prevState;
    });
  };

  const RenderToggleHeader = () => {
    return (
      <button className="button-close" onClick={onToggleChatDisplay}>
        {isChatDisplay ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
      </button>
    );
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onSubmitMessage = (e) => {
    e.preventDefault();

    if (message.trim()) {
      onAddMessage({ content: message, sender });
      setMessage("");
      bodyChatRef.current.scrollTop = bodyChatRef.current.scrollHeight;
    }
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div
      className={`chat-wrapper ${sender} ${isChatDisplay ? "show" : "hidden"}`}
    >
      <div className="chat-header">
        <h3>{sender}</h3>
        <div className="chat-icon-wrapper">
          <RenderToggleHeader />
        </div>
      </div>
      <div className={`chat-content-wrapper`}>
        <div className="chat-container" ref={bodyChatRef}>
          {messages.length > 0 &&
            messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className={`chat-bubble ${
                    sender === message.sender ? "sender" : "receiver"
                  }`}
                >
                  {message.content}
                </div>
              );
            })}
          <div ref={messageEndRef} />
        </div>
        <div className="chat-content-footer">
          <form className="input-message-wrapper" onSubmit={onSubmitMessage}>
            <div className="input-wrapper">
              <input value={message} onChange={onChangeMessage}></input>
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
  );
};

ChatBox.propTypes = {
  sender: PropTypes.string,
  onAddMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatBox;
