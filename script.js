document.getElementById("linkForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const link = document.getElementById("linkInput").value;
    const previewContent = document.getElementById("previewContent");

    // Display loading message
    previewContent.textContent = "Loading preview...";

    // Fetch link metadata using an Open Graph API
    try {
        const response = await fetch(`https://api.linkpreview.net/?key=your_api_key&q=${link}`);
        const data = await response.json();

        if (data.title && data.description) {
            previewContent.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.description}</p>
                <img src="${data.image}" alt="${data.title}" style="width:100%; border-radius: 10px;">
            `;
        } else {
            previewContent.textContent = "No preview available for this link.";
        }
    } catch (error) {
        previewContent.textContent = "Failed to load preview. Please check the link and try again.";
    }
});
