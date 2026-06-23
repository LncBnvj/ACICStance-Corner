// Handles screen formatting adjustments and interaction processing
function sendChat() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    
    const msg = input.value.trim();
    if (!msg) return;
    
    appendMsg(msg, 'user');
    input.value = '';
    
    const quickRepliesNode = document.getElementById('quick-replies');
    if (quickRepliesNode) {
        quickRepliesNode.style.display = 'none';
    }
    
    setTimeout(() => {
        appendMsg(getBotReply(msg), 'bot');
    }, 700);
}

function sendQuick(msg) { 
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.value = msg; 
        sendChat(); 
    }
}

function appendMsg(text, role) {
    const msgs = document.getElementById('chat-messages');
    if (!msgs) return;
    
    const div = document.createElement('div');
    div.className = 'msg ' + role;
    div.innerHTML = `<div class="msg-bubble">${text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>`;
    
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
}