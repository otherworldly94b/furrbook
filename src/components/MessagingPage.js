// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styles from '../../src/styles/Messages.module.css';

// function MessagingPage() {
//   const [recipientUsername, setRecipientUsername] = useState('');
//   const [messageContent, setMessageContent] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null); // To display error messages
//   const currentUser = useCurrentUser();
//   const setCurrentUser = useSetCurrentUser(); // Import for logout functionality

//   // Handle sending a message
//   const sendMessage = async () => {
//     if (!recipientUsername || !messageContent) {
//       return; // Handle empty fields
//     }

//     try {
//       const { token } = currentUser;

//       const response = await axios.post(
//         '/send-message/',
//         {
//           recipient_username: recipientUsername,
//           content: messageContent,
//         },
//         {
//           headers: { Authorization: `Token ${token}` }, // Use token from currentUser
//         }
//       );

//       if (response.data.status === 'success') {
//         setRecipientUsername('');
//         setMessageContent('');
//         setErrorMessage(null); // Clear any previous error message
//         fetchMessages(); // Refresh message list after successful send
//       } else {
//         setErrorMessage(response.data.message || 'An error occurred.'); // Handle errors
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Network error or server unavailable.'); // Handle network or server issues
//     }
//   };

//   // Fetch received messages
//   const fetchMessages = async () => {
//     try {
//       const { token } = currentUser;

//       const response = await axios.get('/inbox/', {
//         headers: { Authorization: `Token ${token}` }, // Use token from currentUser
//       });

//       setMessages(response.data);
//       setErrorMessage(null); // Clear any previous error message
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Error fetching messages. Please try again later.'); // Handle errors
//     }
//   };

//   // Fetch messages on component mount (assuming logged in)
//   useEffect(() => {
//     if (currentUser) {
//       fetchMessages();
//     }
//   }, [currentUser, fetchMessages]);

//   // Conditionally render content based on login state
//   return (
//     <div>
//       {currentUser ? (
//         <>
//           {/* Message sending section with applied styles */}
//           <div className={styles.SendMessageForm}>
//             <input
//               type="text"
//               placeholder="Recipient Username"
//               value={recipientUsername}
//               onChange={(e) => setRecipientUsername(e.target.value)}
//               className={styles.SendMessageInput}
//             />
//             <textarea
//               placeholder="Message Content"
//               value={messageContent}
//               onChange={(e) => setMessageContent(e.target.value)}
//               className={styles.SendMessageInput}
//             />
//             <button onClick={sendMessage} className={styles.SendMessageButton}>
//               Send Message
//             </button>
//           </div>

//           {errorMessage && <p className={styles.ErrorMessage}>{errorMessage}</p>}

//           {/* Message display section with applied styles (if applicable) */}
//           <div className={styles.MessageList}>
//             <h2>Received Messages</h2>
//             {messages.map((message) => (
//               <div key={message.id} className={styles.Message}>
//                 <p className={styles.MessageFrom}>From: {message.sender.username}</p>
//                 <p className={styles.MessageContent}>{message.content}</p>
//                 <p className={styles.MessageTimestamp}>{message.created_at}</p>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <p>You need to be logged in to access messages. Please sign in.</p>
//       )}
//     </div>
//   );
// }

// export default MessagingPage;
