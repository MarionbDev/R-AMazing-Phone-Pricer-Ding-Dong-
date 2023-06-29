import { useState, useEffect, useContext } from "react";
import socketIOClient from "socket.io-client";
import style from "@components/Chat.module.scss";
import arrow from "@assets/Icons/arrow2.svg";
import chatSvg from "@assets/Icons/chat.svg";
import UserContext from "../context/UserContext";

export default function Chat() {
  const [messageList, setMessageList] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [socket, setSocket] = useState();
  const [chat, setChat] = useState(false);

  const [{ user }] = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && newMessageText) {
      socket.emit("messageFromClient", {
        author: user.name,
        text: newMessageText,
      });
    }
  };

  useEffect(() => {
    const socketClient = socketIOClient("http://localhost:5000");
    socketClient.on("initialMessageList", (message) => {
      setMessageList(message);
    });
    socketClient.on("updateMessageList", (updatedMessages) => {
      setMessageList(updatedMessages);
    });
    setSocket(socketClient);
  }, []);

  return (
    <span
      className={style.chat}
      style={{
        position: "fixed",
        bottom: chat ? "0%" : "-42%",
        marginBottom: chat ? "0" : undefined,
        transition: "500ms",
      }}
    >
      <button
        className={style.arrow}
        type="button"
        onClick={() => setChat(!chat)}
        style={{
          outline: "none",
          transition: "500ms",
        }}
      >
        <img
          src={arrow}
          alt="flèche"
          style={{
            transform: "rotate(270deg)",
            display: chat ? "block" : "none",
            transition: "500ms",
          }}
        />
        <img
          src={chatSvg}
          alt="support"
          style={{
            transform: "rotate(0deg)",
            display: chat ? "none" : "block",
            transition: "500ms",
          }}
        />
      </button>
      <section className={style.container}>
        <span>
          <h2>Messages</h2>
          {messageList.map((message) => {
            return (
              <div key={message.id}>
                {message.author} : {message.text}
              </div>
            );
          })}
        </span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="messageContent">
            Contenu du message:{" "}
            <input
              type="text"
              id="messageContent"
              name="messageContent"
              placeholder="message"
              value={newMessageText}
              required
              onChange={(e) => setNewMessageText(e.target.value)}
            />
          </label>
          <input className={style.send} type="submit" value="send" />
        </form>
      </section>
    </span>
  );
}
