import React from "react";
import { auth } from "../firebase/firebase";

function ChatMessage({ message }) {
    const { text, uid, photoURL } = message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    const alignRight = messageClass === "received" ? "justify-end" : "";
  
    return (
      <div className={`message ${messageClass} flex items-center ${alignRight}`}>
        <img
          className="w-10 h-10 rounded-full"
          src={photoURL ||   "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106"}
          alt="User Avatar"
        />
        <p className={`bg-blue-500 px-4 py-2 rounded-lg max-w-xs ${messageClass === 'received' ? 'mr-2' : 'ml-2'}`}>{text}</p>
      </div>
    );
  }
  

export default ChatMessage;
