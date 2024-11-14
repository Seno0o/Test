// Default language is English
let language = 'en';

// Translations for both languages
const translations = {
    en: {
        title: 'Chat Previewer',
        safeChatsTitle: 'Safe Chats ✅️',
        targetedChatsTitle: 'Targeted Chats ❌️',
        safeChats: ['Chat 1', 'Chat 2', 'Chat 3'],
        targetedChats: ['Chat 4', 'Chat 5'],
    },
    es: {
        title: 'Previsualizador de Chats',
        safeChatsTitle: 'Chats Seguros ✅️',
        targetedChatsTitle: 'Chats Objetivos ❌️',
        safeChats: ['Chat 1', 'Chat 2', 'Chat 3'],
        targetedChats: ['Chat 4', 'Chat 5'],
    }
};

// Function to change language
function changeLanguage() {
    const selectedLang = document.getElementById('languageSelect').value;
    language = selectedLang;

    // Update page content based on the selected language
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('safeChatsTitle').textContent = translations[language].safeChatsTitle;
    document.getElementById('targetedChatsTitle').textContent = translations[language].targetedChatsTitle;

    updateChatsList();
}

// Function to update chats based on the selected language
function updateChatsList() {
    const safeChatsList = document.getElementById('safeChatsList');
    const targetedChatsList = document.getElementById('targetedChatsList');

    // Clear current lists
    safeChatsList.innerHTML = '';
    targetedChatsList.innerHTML = '';

    // Populate safe chats list
    translations[language].safeChats.forEach(chat => {
        const li = document.createElement('li');
        li.textContent = chat;
        safeChatsList.appendChild(li);
    });

    // Populate targeted chats list
    translations[language].targetedChats.forEach(chat => {
        const li = document.createElement('li');
        li.textContent = chat;
        targetedChatsList.appendChild(li);
    });
}

// Initialize the page with default language
window.onload = () => {
    changeLanguage(); // Set to default language (English)
};
