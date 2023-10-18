function submitMessage(user) {
    let inputElement = document.getElementById(user + 'Input')
    let messageText = inputElement.value.trim();
    if (messageText) {
        sendMessage(user,messageText,inputElement)
    } else {
        alert('Please enter a message');
    }
}

function sendMessage(user, messageText, inputElement){
    let chatWindow = document.getElementById('chatWindow');
    let messageElement = document.createElement('div');
    messageElement.className = user + 'Message';
    let userName = document.createElement('h5')
    userName.textContent = user
    let userText = document.createElement('p')
    userText.textContent = messageText
    messageElement.appendChild(userName)
    messageElement.appendChild(userText)
    chatWindow.appendChild(messageElement);
    inputElement.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function checkEnter(e, user){
    if(e.key === "Enter"){
        e.preventDefault()
        submitMessage(user)
    }
}

document.getElementById('user1Input').addEventListener('keydown', function(e) {
    checkEnter(e, 'user1');
});
document.getElementById('user2Input').addEventListener('keydown', function(e) {
    checkEnter(e, 'user2');
});