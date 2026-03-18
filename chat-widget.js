// chat-widget.js
function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    if (chatPopup.style.display === 'none' || !chatPopup.style.display) {
        chatPopup.style.display = 'flex';
    } else {
        chatPopup.style.display = 'none';
    }
}