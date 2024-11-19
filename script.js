// script.js

// Fetch the .txt file from the GitHub repository
async function fetchChatData() {
    try {
        const response = await fetch('https://github.com/Seno0o/Test/blob/3001146c1936334736f6c27cc413b49461a373c3/chat_details.txt'); // Replace with your GitHub raw file URL
        const textData = await response.text();
        return parseChatData(textData);
    } catch (error) {
        console.error("Error fetching chat data:", error);
    }
}

// Parse the chat data from the .txt file
function parseChatData(data) {
    const chats = [];
    const entries = data.split(/\n(?=Title: )/);

    entries.forEach(entry => {
        const titleMatch = entry.match(/Title: (.+)/);
        const linkMatch = entry.match(/NDC Link: (.+)/);
        const authorMatch = entry.match(/Author: (.+) \(UID: (.+)\)/);
        const coHosts = Array.from(entry.matchAll(/- (.+) \(UID: (.+)\)/g)).map(match => ({
            name: match[1],
            uid: match[2]
        }));

        if (titleMatch && linkMatch && authorMatch) {
            chats.push({
                title: titleMatch[1],
                link: linkMatch[1],
                author: {
                    name: authorMatch[1],
                    uid: authorMatch[2]
                },
                coHosts
            });
        }
    });

    return chats;
}

// Render the chat data to the webpage
function renderChats(chats) {
    const container = document.getElementById('chat-list');
    container.innerHTML = '';

    chats.forEach(chat => {
        const chatCard = document.createElement('div');
        chatCard.classList.add('chat-card');

        const title = document.createElement('h2');
        title.textContent = chat.title;
        chatCard.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Host: ${chat.author.name}`;
        chatCard.appendChild(author);

        const viewDetails = document.createElement('button');
        viewDetails.textContent = 'View Details';
        viewDetails.addEventListener('click', () => {
            renderChatDetails(chat);
        });
        chatCard.appendChild(viewDetails);

        container.appendChild(chatCard);
    });
}

// Render detailed information about a chat
function renderChatDetails(chat) {
    const detailsContainer = document.getElementById('chat-details');
    detailsContainer.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = chat.title;
    detailsContainer.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Host: ${chat.author.name} (UID: ${chat.author.uid})`;
    detailsContainer.appendChild(author);

    const link = document.createElement('a');
    link.href = chat.link;
    link.textContent = 'Go to Chat';
    link.target = '_blank';
    detailsContainer.appendChild(link);

    const coHostsHeader = document.createElement('h3');
    coHostsHeader.textContent = 'Co-hosts:';
    detailsContainer.appendChild(coHostsHeader);

    const coHostsList = document.createElement('ul');
    chat.coHosts.forEach(coHost => {
        const coHostItem = document.createElement('li');
        coHostItem.textContent = `${coHost.name} (UID: ${coHost.uid})`;
        coHostsList.appendChild(coHostItem);
    });
    detailsContainer.appendChild(coHostsList);
}

// Initialize the page
(async function init() {
    const chats = await fetchChatData();
    if (chats) {
        renderChats(chats);
    }
})();
