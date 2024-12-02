document.addEventListener('DOMContentLoaded', loadMessages);

// 检测元素是否重叠
function isOverlapping(elements, rect) {
    return Array.from(elements).some(element => {
        const { left, top, right, bottom } = element.getBoundingClientRect();
        return !(
            rect.right < left ||
            rect.left > right ||
            rect.bottom < top ||
            rect.top > bottom
        );
    });
}

// 找到空白区域
function findFreeSpace() {
    const elements = document.querySelectorAll('.p1, .wojianzhu, textarea, img, .message');
    let position;
    do {
        position = {
            x: Math.random() * (window.innerWidth - 200),
            y: Math.random() * (window.innerHeight - 50)
        };
    } while (isOverlapping(elements, { left: position.x, top: position.y, right: position.x + 200, bottom: position.y + 50 }));
    return position;
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(message => {
        const messageElement = createMessageElement(message);
        const position = findFreeSpace();
        messageElement.style.left = `${position.x}px`;
        messageElement.style.top = `${position.y}px`;
        document.body.appendChild(messageElement);
        fadeInMessage(messageElement);
    });
}

function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message !== '') {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push(message);
        localStorage.setItem('messages', JSON.stringify(messages));
        messageInput.value = '';
        const messageElement = createMessageElement(message);
        const position = findFreeSpace();
        messageElement.style.left = `${position.x}px`;
        messageElement.style.top = `${position.y}px`;
        document.body.appendChild(messageElement);
        fadeInMessage(messageElement);
    }
}

function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.textContent = message;
    const deleteButton = document.createElement('span');
    deleteButton.textContent = '✖';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        messageElement.remove();
        removeMessage(message);
    };
    messageElement.appendChild(deleteButton);
    return messageElement;
}

function fadeInMessage(messageElement) {
    messageElement.style.opacity = 0;
    setTimeout(() => {
        messageElement.style.opacity = 1;
    }, 10);
}

function removeMessage(message) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const index = messages.indexOf(message);
    if (index > -1) {
        messages.splice(index, 1);
        localStorage.setItem('messages', JSON.stringify(messages));
    }
}