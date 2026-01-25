document.addEventListener('DOMContentLoaded', () => {
    console.log('SOPHICAR App Initialized');

    // Example: Toggle chat window (if we had a minimize button)
    const chatHeader = document.querySelector('.chat-header');
    const chatWidget = document.querySelector('.chat-widget');
    
    // Simple interactions for demo
    const taskCards = document.querySelectorAll('.task-card');
    taskCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Card clicked:', card.querySelector('.card-title').innerText);
            // In a real app, this would open a detail view
        });
    });

    const sendBtn = document.querySelector('.send-btn');
    const chatInput = document.querySelector('.input-container input');
    
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;
        
        // Add message to chat body
        const chatBody = document.querySelector('.chat-body');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        messageDiv.innerHTML = `
            <div class="avatar">👤</div>
            <div class="bubble">
                ${text}
                <div class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            </div>
        `;
        chatBody.appendChild(messageDiv);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
