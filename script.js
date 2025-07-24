// Create WebSocket connection (change to your server URL if needed)
const socket = new WebSocket('ws://localhost:3000');

const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message');
const chatBox = document.getElementById('chat-box');

// Send message on submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message) {
    socket.send(message);
    messageInput.value = '';
  }
});

// Receive messages
socket.onmessage = (event) => {
  const msg = document.createElement('div');
  msg.textContent = event.data;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
};

// Handle errors or closed connection
socket.onerror = (error) => console.error('WebSocket Error:', error);
socket.onclose = () => console.log('WebSocket connection closed.');
