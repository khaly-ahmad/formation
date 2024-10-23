const socket = io();
socket.on('message', (messageData) => {
    if(messageData.sender !=='self'){
        displayMessage(messageData.message, 'received');
    }
})

document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    if (message.trim() !== '') {
        displayMessage(message, 'sent');
        socket.emit('chatMessage', {message,sender: 'self'});
        document.getElementById('message-input').value = '';
    }
})

function displayMessage(message,type) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;

    messageElement.classList.add('message',type);
    document.getElementById('messages').appendChild(messageElement);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}