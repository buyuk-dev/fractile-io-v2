document.addEventListener('DOMContentLoaded', function() {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatlogs = document.getElementById('chatlogs');

    chatForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userText = userInput.value;
        if (userText.trim() !== '') {
            appendMessage('User', userText);
            userInput.value = '';
            fetchMockResponse(userText);
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender.toLowerCase());
        messageElement.textContent = `${sender}: ${message}`;
        chatlogs.appendChild(messageElement);
        chatlogs.scrollTop = chatlogs.scrollHeight;
    }

    function fetchMockResponse(userText) {
        setTimeout(() => {
            const mockResponses = {
                'hello': 'Hello! How can I assist you today?',
                'ai agents': 'AI Agents are advanced bots that improve upon raw LLM models.',
                'fractile': 'Fractile is a cutting-edge technology company specializing in AI.',
                'products': 'We offer various AI-driven products to enhance your business.'
            };
            const botResponse = mockResponses[userText.toLowerCase()] || 'I am not sure about that. Can you please ask something else?';
            appendMessage('Bot', botResponse);
        }, 1000);
    }
});