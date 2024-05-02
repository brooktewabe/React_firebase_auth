import React from "react";
import { auth } from "../firebase/firebase";

  function ChatMessage({ message }) {
    const { text, uid, photoURL } = message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
      <div className={`message ${messageClass} flex items-center`}>
        <img
          className="w-10 h-10 rounded-full"
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt="User Avatar"
        />
        <p className="bg-blue-500 px-4 py-2 rounded-lg max-w-xs">{text}</p>
      </div>
    );
  }

export default ChatMessage;
