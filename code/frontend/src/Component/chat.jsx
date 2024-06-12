// import React, { useState, useEffect, useRef } from "react";

// function ChatComponent() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const ws = useRef(null);

//   useEffect(() => {
//     // Establish WebSocket connection
//     ws.current = new WebSocket("ws://localhost:8000/ws/chat/");

//     // Event handler for incoming messages
//     ws.current.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       setMessages((prevMessages) => [...prevMessages, message]);
//     };

//     // Cleanup function to close WebSocket connection
//     return () => {
//       ws.current.close();
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim() !== "") {
//       // Send message to server
//       ws.current.send(JSON.stringify({ message: input }));
//       setInput("");
//     }
//   };

//   return (
//     <div>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index}>
//             {message.sender === "user" ? (
//               <p>You: {message.message}</p>
//             ) : (
//               <p>Server: {message.message}</p>
//             )}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           placeholder="Type a message..."
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default ChatComponent;
