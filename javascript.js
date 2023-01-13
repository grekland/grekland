// Get references to the chat form and chat messages
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

// Listen for new chat messages
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get the chat input
  const chatInput = document.getElementById('chat-input');

  // Create a new chat message
  const chatMessage = document.createElement('li');
  chatMessage.innerText = chatInput.value;

  // Add the new chat message to the chat messages list
  chatMessages.appendChild(chatMessage);

  // Clear the chat input
  chatInput.value = '';
});
